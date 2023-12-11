const DepartmentModel = require('../models/department.model');

const getAllDepartments = async (req, res) => {
    /**#swagger.tags = ['Departments']
       #swagger.description = 'Endpoint to get all Departments.'
    */
    try {
        const [result] = await DepartmentModel.selectAllDepartments();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createDepartment = async (req, res) => {
    // #swagger.tags = ['Departments']
    // #swagger.description = 'Endpoint to create a Department.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Department information.',
            required: true,
            schema: { $ref: "#/definitions/Departments" }
    } */
    try {
        const [result] = await DepartmentModel.insertDepartment(req.body);
        const [department] = await DepartmentModel.selectDepartmentById(result.insertId);
        res.json(department[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getDepartmentById = async (req, res) => {
    // #swagger.tags = ['Departments']
    // #swagger.description = 'Endpoint to get a Department.'
    try {
        const { departmentId } = req.params;

        const [department] = await DepartmentModel.selectDepartmentById(departmentId);
        res.json(department[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateDepartment = async (req, res) => {
    // #swagger.tags = ['Departments']
    // #swagger.description = 'Endpoint to get a Department.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Department information.',
            required: true,
            schema: { $ref: "#/definitions/Departments" }
    } */
    try {
        const { departmentId } = req.params;
        const [result] = await DepartmentModel.updateDepartmentById(departmentId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Department does not change ');
        } else {
            res.status(200).send("Department modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteDepartment = async (req, res) => {
    // #swagger.tags = ['Departments']
    // #swagger.description = 'Endpoint to get a Department.'
    try {
        const { departmentId } = req.params;
        const [result] = await DepartmentModel.deleteDepartmentById(departmentId);

        if (result.affectedRows == 0) {
            res.status(404).send('Department not found');
        } else {
            res.status(200).send("Department deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: "Error deleting department. Try later" });
    }
}

module.exports = { getAllDepartments, createDepartment, getDepartmentById, deleteDepartment, updateDepartment }