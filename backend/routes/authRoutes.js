const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define authentication routes
router.post('/login', authController.login); // POST request for user login
router.post('/register', authController.register); // POST request for user registration

module.exports = router;
