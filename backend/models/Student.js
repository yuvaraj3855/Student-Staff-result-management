const db = require('../config/db'); // Import your database connection

// Define the Student model
const Student = {};

// Function to create a new student
Student.create = (studentData) => {
    return db.execute(
        'INSERT INTO students (registrationNumber, name) VALUES (?, ?)',
        [studentData.registrationNumber, studentData.name]
    );
};

// Function to find a student by registration number
Student.findByRegistrationNumber = (registrationNumber) => {
    return db.execute('SELECT * FROM students WHERE registrationNumber = ?', [registrationNumber]);
};

// Export the Student model
module.exports = Student;
