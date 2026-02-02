const { Pool } = require('pg');
require('dotenv').config();

// postgresql://postgres:postgres@localhost:5432/pmshri
const pool = new Pool({
    // connectionString: process.env.POSTGRES_URL,
    db_connection: "pg", port: "5432",
    user: "postgres", password: "postgres",
    database: "pmshri", host: "localhost",
    max: 20, idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000

});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});

module.exports = pool;





