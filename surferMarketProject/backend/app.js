const express = require('express');
const cors = require('cors');
// Traer la base de datos
const pool = require('./db')
// Estas dos rutas traen problemas para levantar la terminal
// const authRoutes = require('./routes/authRoutes'); // Importa las rutas de autenticación
// const { authenticateToken } = require('./routes/authRoutes'); // Asegúrate de que la ruta sea correcta


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar datos JSON en las solicitudes

// Rutas
// app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando con CORS habilitado');
});

// app.use(cors({
//   origin: 'http://tudominio.com' // Reemplaza con el dominio de tu frontend
// }));


// Conectar rutas DB

// Ruta para traer la información de las Base de Datos denominada "tablas"

// [PRODUCTOS] Se extrae la data de Productos
app.get("/api/products", async (req, res) => {
  try {
    const query = 'SELECT * FROM product;';
    const { rows } = await pool.query(query)

    res.json(rows);

  } catch (error) {
    console.log(`El error que se muestra es ${error.message}`);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
})













// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});