const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Importa las rutas de autenticación
const { authenticateToken } = require('./authRoutes'); // Asegúrate de que la ruta sea correcta


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar datos JSON en las solicitudes

// Rutas
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando con CORS habilitado');
});

app.use(cors({
  origin: 'http://tudominio.com' // Reemplaza con el dominio de tu frontend
}));


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Conectar rutas DB

// Ruta para traer la información de las Base de Datos denominada "tablas"
// app.get('/surferMarketDB', async (req, res) => {
//   try {
//     //

//     const { limits, pages ,order_by} = req.query

//     // Crear variable de realizar consultas
//     let consultas = ''

//     if (order_by) {
      
//     }

//   } catch (error) {
//     res.status(500).send(error)
//   }
// })