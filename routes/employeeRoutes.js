const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route to display table
router.get('/', employeeController.getEmployeeList);

module.exports = router;
