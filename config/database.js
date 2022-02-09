const { createPool } = require("mysql");

const pool = createPool({
    host:process.env.HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    connectionLimit:10
})

module.exports = pool;

