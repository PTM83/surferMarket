const { Pool } = require('pg');
require('dotenv').config() // Cargar las variables del entorno

// Conectar con la base de datos de PostgeSQL

const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  allowExitOnIdle: true
});

module.exports = pool;
