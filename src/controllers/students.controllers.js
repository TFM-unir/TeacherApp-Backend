const StudentModel = require('../models/student.model');

const getAllStudents = async (req, res) => {
    /**#swagger.tags = ['Students']
       #swagger.description = 'Endpoint to get all Students.'
    */
    try {
        const [result] = await StudentModel.selectAllStudents();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createStudent = async (req, res) => {
    // #swagger.tags = ['Students']
    // #swagger.description = 'Endpoint to create a Student.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Student information.',
            required: true,
            schema: { $ref: "#/definitions/Students" }
    } */
    try {
        const [result] = await StudentModel.insertStudent(req.body);
        const [student] = await StudentModel.selectStudentById(result.insertId);
        res.json(student[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getStudentById = async (req, res) => {
    /**#swagger.tags = ['Students']
       #swagger.description = 'Endpoint to get a Student.'
    */
    try {
        const { studentId } = req.params;

        const [student] = await StudentModel.selectStudentById(studentId);
        res.json(student[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateStudent = async (req, res) => {
    // #swagger.tags = ['Students']
    // #swagger.description = 'Endpoint to update a Student.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Student information.',
            required: true,
            schema: { $ref: "#/definitions/Students" }
    } */
    try {
        const { studentId } = req.params;
        const [result] = await StudentModel.updateStudentById(studentId, req.body);

        /* if (result.changedRows == 0) {
            res.status(404).send('Student does not change ');
        } else {
            res.status(200).send("Student modified successfuly");
        } */
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteStudent = async (req, res) => {
    /**#swagger.tags = ['Students']
       #swagger.description = 'Endpoint to delete a Student.'
    */
    try {
        const { studentId } = req.params;
        const [result] = await StudentModel.deleteStudentById(studentId);

        if (result.affectedRows == 0) {
            res.status(404).send('Student not found');
        } else {
            res.status(200).send("Student deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllStudents, createStudent, getStudentById, deleteStudent, updateStudent }