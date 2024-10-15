const express = require('express');
const router = express.Router();

// Import employee data
const data = {};
data.employees = require('./data/employee.json');
const datacontroller = require("./controllers/employeecontroller")
// Router chaining
router.route('/')
    .get()
    .put()
    .post()
    .delete();

router.route('/:id')
    .get((req, res) => {
        const employeeId = parseInt(req.params.id);
        const employee = data.employees.find(emp => emp.id === employeeId);

        if (!employee) {
            return res.status(404).json({ "message": "Employee not found." });
        }

        res.json(employee);
    });

module.exports = router;
