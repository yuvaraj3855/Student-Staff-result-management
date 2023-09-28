const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const authMiddleware = require('../middleware/ authMiddleware');

// Define result management routes
router.get('/', authMiddleware, resultController.getAllResults); // GET request to retrieve all results
router.post('/', authMiddleware, resultController.createResult); // POST request to create a new result
router.put('/:id', authMiddleware, resultController.updateResult); // PUT request to update a result by ID
router.delete('/:id', authMiddleware, resultController.deleteResult); // DELETE request to delete a result by ID

module.exports = router;
