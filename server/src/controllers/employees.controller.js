const employeesCtrl = {}

const Employee = require('../models/employee')

employeesCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeesCtrl.createEmployees = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee created'})
}
employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeesCtrl.editEmployees = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee update'})
}
employeesCtrl.deleteEmployees = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'})
}

module.exports = employeesCtrl;