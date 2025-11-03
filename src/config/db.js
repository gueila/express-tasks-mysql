// Get the client
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// Create the connection to database
const getConnection = async () => {
  try {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = getConnection;
