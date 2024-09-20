const axios = require('axios');

// Fetch employee data
exports.getEmployeeData = async () => {
    try {
        const response = await axios.post('https://demo.pinnacle.in/v1/wamessage/employeeList', {}, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('Response:', response.data);
        return response.data.data; 
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return [];
    }
};
