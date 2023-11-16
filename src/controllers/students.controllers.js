const StudentModel = require('../models/student.model');

const getAllStudents = async (req, res) => {
    try {
        const [result] = await StudentModel.selectAllStudents();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createStudent = async (req, res) => {
    try {
        const [result] = await StudentModel.insertStudent(req.body);
        const [student] = await StudentModel.selectStudentById(result.insertId);
        res.json(student[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;

        const [student] = await StudentModel.selectStudentById(studentId);
        res.json(student[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const [result] = await StudentModel.updateStudentById(studentId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Student does not change ');
        } else {
            res.status(200).send("Student modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteStudent = async (req, res) => {
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