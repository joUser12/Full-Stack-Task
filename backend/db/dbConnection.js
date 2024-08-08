const mysql = require('mysql2');

// connecting Database
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "User@12345",
    database: "user_management",
  });

module.exports = connection.promise();
