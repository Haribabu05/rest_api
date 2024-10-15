const data = {};
data.employees = require('./data/employee.json');

const getemployee = (req, res) => {
    res.json(data.employees); // Returns employee list
}

const putemployee = (req,res)=>{
    const employeeId = parseInt(req.body.id);
    const employeeIndex = data.employees.findIndex(emp => emp.id === employeeId)
    if(employeeIndex === -1)
    {
        return res.status(404).json({'message':'Employee not found.'})   
    }
     if(req.body.firstName){
        employee.firstName = req.body.firstName
    }
      if(req.body.lastName)
    {
        employee.lastName = req.body.lastName
    }
    
    res.json({"message ": `employee with ID ${employeeId} is updated`})
}
const postemployee = (req, res) => {
    // Handle POST request
    const newEmployee = {
        id: data.employees.length + 1,
        firstname: req.body.firstName,
        lastname: req.body.lastName
    };
    data.employees.push(newEmployee);
    res.status(201).json(newEmployee);
}

const deleteemployee = (req, res) => {
    const employeeId = parseInt(req.body.id);
    const employeeIndex = data.employees.findIndex(emp => emp.id === employeeId);

    if (employeeIndex === -1) {
        return res.status(404).json({ "message": "Employee not found." });
    }

    data.employees.splice(employeeIndex, 1);
    res.json({ "message": `Employee with ID ${employeeId} deleted.` });
}

module.exports ={getemployee,postemployee,deleteemployee,putemployee}