const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // Additional configuration options if needed
});

module.exports = sequelize;