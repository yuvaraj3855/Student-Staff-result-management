const pool = require('../config/db'); // Assuming you have a MySQL connection pool

// Function to create a new user
function createUser(userData, callback) {
    pool.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [userData.username, userData.password],
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results.insertId);
        }
    );
}

// Function to find a user by username
function findUserByUsername(username, callback) {
    pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        if (results.length === 0) {
            callback(null, null); // User not found
        } else {
            callback(null, results[0]); // User found
        }
    });
}

module.exports = {
    createUser,
    findUserByUsername,
};
