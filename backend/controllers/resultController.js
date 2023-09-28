const pool = require('../config/db'); // Assuming you have a MySQL connection pool

// Function to retrieve all results
function getAllResults(req, res) {
    pool.query('SELECT * FROM results', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
            return;
        }
        res.status(200).json(results);
    });
}

// Function to create a new result
function createResult(req, res) {
    const { subject, score, grade } = req.body;

    pool.query(
        'INSERT INTO results (subject, score, grade) VALUES (?, ?, ?)',
        [subject, score, grade],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
                return;
            }
            res.status(201).json({ message: 'Result created successfully' });
        }
    );
}

// Function to update a result by ID
function updateResult(req, res) {
    const { id } = req.params;
    const { subject, score, grade } = req.body;

    pool.query(
        'UPDATE results SET subject = ?, score = ?, grade = ? WHERE id = ?',
        [subject, score, grade, id],
        (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
                return;
            }
            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Result not found' });
            } else {
                res.status(200).json({ message: 'Result updated successfully' });
            }
        }
    );
}

// Function to delete a result by ID
function deleteResult(req, res) {
    const { id } = req.params;

    pool.query('DELETE FROM results WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Result not found' });
        } else {
            res.status(204).json(); // No content response
        }
    });
}

module.exports = {
    getAllResults,
    createResult,
    updateResult,
    deleteResult,
};
