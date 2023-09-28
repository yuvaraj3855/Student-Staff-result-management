const jwt = require('jsonwebtoken');

// Middleware function to verify JWT tokens
const authMiddleware = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if the token is missing or invalid
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Extract the token from the "Bearer" token format
    const tokenValue = token.slice(7);

    try {
        // Verify the token with your secret key (replace 'your_secret_key_here')
        const decodedToken = jwt.verify(tokenValue, 'your_secret_key_here');

        // Attach the decoded user data to the request object for later use
        req.user = decodedToken;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
