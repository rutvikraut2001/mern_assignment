const employeeModel = require('../models/employeeModel');

// Get employee data and show list
exports.getEmployeeList = async (req, res) => {
    try {
        const employeeData = await employeeModel.getEmployeeData();
        //pass employee data to view
        res.render('employeeList', { employees: employeeData });
    } catch (error) {
        res.status(500).send('Error fetching employee data');
    }
};
