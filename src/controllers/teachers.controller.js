const TeacherModel = require('../models/teacher.model.js');

const getAllTeachers = async (req, res) => {
    try {
        const [result] = await TeacherModel.selectAllTeachers();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getAllTeachersByState = async (req, res) => {
    try {
        const { teacherState } = req.params;
        const [result] = await TeacherModel.selectAllTeachersByState(teacherState);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getTeacherById = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const [result] = await TeacherModel.selectTeacherById(teacherId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const createTeacher = async (req, res) => {
    try {
        const [result] = await TeacherModel.insertTeacher(req.body);
        const [teacher] = await TeacherModel.selectTeacherById(result.insertId);
        res.json(teacher[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const updateTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const result = await TeacherModel.updateTeacherById(teacherId, req.body);
        if (result.changedRows == 0) {
            res.status(404).send('Teacher does not change ');
        } else {
            res.status(200).send("Teacher modified successfuly");
        }
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const [result] = await TeacherModel.deleteTeacherById(teacherId);

        if (result.affectedRows == 0) {
            res.status(404).send('Teacher not found');
        } else {
            res.status(200).send("Teacher deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher, getAllTeachersByState }