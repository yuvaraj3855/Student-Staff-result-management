const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING, // You can use an appropriate data type for roles (e.g., STRING, ENUM, etc.)
        allowNull: false, // Adjust as needed
    },
}, {
    tableName: 'users',
    timestamps: true, // Disable timestamps
});
const Results = sequelize.define('Results', {
    studentName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    register_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER, // Adjust the data type as needed
        allowNull: false,
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'results',
    timestamps: true, // If you don't want timestamps for this table
});

// Now, you can use the Results model to interact with the "results" table in your database.

module.exports = {
    User,
    Results
};