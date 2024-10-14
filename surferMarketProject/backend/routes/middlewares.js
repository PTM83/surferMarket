const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
  // Obtener el token desde los headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato: "Bearer <token>"

  // Verificar si el token está presente
  if (!token) {
    return res.status(403).json({ message: 'Token requerido' });
  }

  // Verificar el token con la clave secreta
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    // Si el token es válido, agrega el usuario al request
    req.user = user;

    // Llama a la siguiente función o ruta
    next();
  });
}

module.exports = { authenticateToken };