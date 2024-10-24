const { Pool } = require('pg');
require('dotenv').config() // Cargar las variables del entorno

// Conectar con la base de datos de PostgeSQL

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  allowExitOnIdle: true
});

module.exports = pool;
