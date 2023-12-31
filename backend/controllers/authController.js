const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User'); // Replace with your user model
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
console.log(SECRET_KEY)
// User login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(1)
    try {
        // Find the user by username in your database
        const user = await UserModel.findUserByUsername(username)
        console.log(user.password)
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

        // Return the token to the client
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// User registration
exports.register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await UserModel.findUserByUsername(username)

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in your database
        const newUser = UserModel.createUser({
            username,
            password: hashedPassword,
            role
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
