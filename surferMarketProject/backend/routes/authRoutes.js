const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

// Base de datos simulada para usuarios
const users = []; // Aquí puedes conectar tu base de datos real más adelante.

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Guardar el usuario en la base de datos (aquí estamos usando un arreglo simulado)
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

// Ruta para hacer login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

  // Verificar la contraseña
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

  // Generar un token JWT
  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });

  res.json({ token });
});

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).json({ message: 'Token requerido' });

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
}

// Ruta protegida (ejemplo)
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenido ${req.user.username}, tienes acceso a esta ruta protegida` });
});

module.exports = router;
