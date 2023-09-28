const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost', // Replace with your MySQL server host
    user: 'root',      // Replace with your MySQL username
    password: 'Chennai!43', // Replace with your MySQL password
    database: 'stud_res', // Replace with your MySQL database name
    waitForConnections: true,
    connectionLimit: 10, // Adjust the connection limit as needed
    queueLimit: 0,
});

// Export the connection pool
module.exports = pool.promise();
