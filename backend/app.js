const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the database');

    connection.release();
});

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
