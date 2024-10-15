const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;

// Import employee router, not employee data
const employeeRouter = require('./employee'); // Ensure this path points to the correct router file
const { router } = require('server/plugins/socket');

// Middleware to parse JSON
app.use(express.json());

// Set up routes
app.use('/employee', employeeRouter); // Use the router, not data

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});