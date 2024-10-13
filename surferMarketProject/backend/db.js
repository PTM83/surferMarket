const { Pool } = require('pg');
require('dotenv').config() // Cargar las variables del entorno

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  allowExitOnIdle: true
});

module.exports = pool;
