const pool = require('../config/db')

// Function to create a new result
function createResult(resultData, callback) {
    pool.query(
        'INSERT INTO results (student_id, subject, score, grade) VALUES (?, ?, ?, ?)',
        [resultData.student_id, resultData.subject, resultData.score, resultData.grade],
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results.insertId);
        }
    );
}

// Function to get all results
function getAllResults(callback) {
    pool.query('SELECT * FROM results', (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
}

// Export the model functions
module.exports = {
    createResult,
    getAllResults,
};
