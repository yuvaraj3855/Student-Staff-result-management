const db = require('../config/db'); // Import your database connection

// Define the Staff model
const Staff = {};

// Function to create a new staff member
Staff.create = (staffData) => {
    return db.execute(
        'INSERT INTO staff (staffId, name) VALUES (?, ?)',
        [staffData.staffId, staffData.name]
    );
};

// Function to find a staff member by staff ID
Staff.findByStaffId = (staffId) => {
    return db.execute('SELECT * FROM staff WHERE staffId = ?', [staffId]);
};

// Export the Staff model
module.exports = Staff;

