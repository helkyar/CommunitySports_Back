const { Pool } = require("pg")

// Coloca aquí tus credenciales
const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  /* database: process.env.DBNAME, */
  password: process.env.DBPSWD,
  port: process.env.DBPORT,
});

module.exports = pool;