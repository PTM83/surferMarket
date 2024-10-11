const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourUser',
  host: 'localhost',
  database: 'surferMarketDB',
  password: 'xxxxxx',
  port: 5432,
});

module.exports = pool;
