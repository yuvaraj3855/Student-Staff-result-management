const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const sequelize = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
        await sequelize.sync(); // Synchronize the models with the database
    } catch (error) {
        console.error('Database connection error:', error);
    }
})();

// Routes
const authRoutes = require('./routes/authRoutes'); // Import your authentication routes
const resultRoutes = require('./routes/resultRoutes'); // Import your result management routes

// Use your routes
app.use('/api/auth', authRoutes);
app.use('/api/results', resultRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
