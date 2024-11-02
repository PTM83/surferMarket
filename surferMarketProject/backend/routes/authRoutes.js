const express = require('express');
const pool = require('../db'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { authenticateToken } = require('./authRoutes'); // Asegúrate de que la ruta sea correcta


const router = express.Router();

// Base de datos simulada para usuarios
// const users = []; // Aquí puedes conectar tu base de datos real más adelante.

// READ los usuarios de la data base
router.get('/register', async (req, res) => {
  try {
    const query = 'SELECT * FROM users;';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(`El error al leer la base de datos es: ${error.message}`);
    res.status(500).json({ message: 'Error al obtener los datos de usuarios' });
  }
});


// // Ruta para registrar un nuevo usuario
// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, profile_image } = req.body;

    // Verificar que la contraseña no sea undefined o vacía
    if (!password) {
      return res.status(400).json({ message: 'La contraseña es obligatoria' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Guardar el usuario en la base de datos
    const query = `
      INSERT INTO users (name, email, password_hash, role, profile_image)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [name, email, hashedPassword, role, profile_image];

    const { rows } = await pool.query(query, values);
    const newUser = rows[0];

    // Enviar la respuesta una vez que el usuario ha sido creado
    res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser });

  } catch (error) {
    console.error(`Error al registrar el usuario: ${error.message}`);
    
    // Asegúrate de no enviar otra respuesta si ya se envió antes
    if (!res.headersSent) {
      res.status(503).json({ message: 'Error al registrar el usuario' });
    }
  }
});


// // Ruta para hacer login
router.post('/login', async (req, res) => {
  
  try {
    
    const { email, password } = req.body;
    
    const query = 'SELECT * FROM users WHERE email = $1;';
    const userEmail = [email];

    const { rows } = await pool.query(query, userEmail)
    
    // Verifica si el usuario existe
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0]; // Toma el primer (y único) usuario encontrado
    
    // // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });
    
    // res.json(user); // Devuelve la información del usuario
    // Generar un token JWT
    const token = jwt.sign({ userEmail }, 'secretKey', { expiresIn: '1h' });
  
    res.json({ token });
    
  } catch (error) {
    console.error(`Error al encontrar el usuario: ${error.message}`);
    res.status(503).json({ message: 'Error al encontrar el usuario' });
  }
  
});

// // Middleware para verificar el token JWT
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) return res.status(403).json({ message: 'Token requerido' });

//   jwt.verify(token, 'secretKey', (err, user) => {
//     if (err) return res.status(403).json({ message: 'Token inválido' });
//     req.user = user;
//     next();
//   });
// }

// // Ruta protegida (ejemplo)
// router.get('/protected', authenticateToken, (req, res) => {
//   res.json({ message: `Bienvenido ${req.user.username}, tienes acceso a esta ruta protegida` });
// });


// backend/routes/authRoutes.js

const express = require('express');


// Ruta para obtener los datos del perfil de usuario
router.get('/profile', (req, res) => {
  // Aquí puedes obtener los datos del usuario autenticado, por ejemplo, desde una base de datos
  const userProfile = {
    name: 'Nombre del Usuario',
    publishedBoards: [
      { id: 1, name: 'Tabla Pro', category: 'Shortboard', price: 400 },
      { id: 2, name: 'Tabla de Olas', category: 'Longboard', price: 500 },
    ],
    soldBoards: [
      { id: 3, name: 'Tabla Wave', category: 'Funboard', buyer: 'Comprador 1' },
    ],
    purchasedBoards: [
      { id: 4, name: 'Tabla Speed', category: 'Gun', price: 300 },
    ],
  };

  res.json(userProfile);
});




module.exports = router;