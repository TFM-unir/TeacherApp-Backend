//IMportamos el model de Class
const ClassHoursModel = require('../models/class.hour.model');

const getAllClass = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.selectAllClass();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getClassById = async (req, res) => {
    try {
        const [classId] = req.params;
        const [ClassHour] = await ClassHoursModel.selectClassById(classId);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getAllClassByTeacherId = async (req, res) => {
    try {
        const [teacherId] = req.params;
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherId(teacherId);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getAllClassBySlot = async (req, res) => {
    try {
        const [ClassHour] = await ClassHoursModel.selectClassBySlot(req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getAllClassByDayOfWeek = async (req, res) => {
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByDayOfWeek(req.body.day_of_week);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getAllClassByTeacherIdAndDayOfWeek = async (req, res) => {
    try {
        const [teacherId] = req.params;
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeek(teacherId, req.body.day_of_week);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const getAllClassByTeacherIdAndSlot = async (req, res) => {
    try {
        const [teacherId] = req.params;
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndSlot(teacherId, req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};


const getAllClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    try {
        const [teacherId] = req.params;
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeekAndSlot(teacherId, req.body.day_of_week, req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const createClass = async (req, res) => {
    try {
        req.body.teacher_id = req.user.teacher.id;
        const [result] = await ClassHoursModel.insertClass(req.body);
        const [ClassHour] = await ClassHoursModel.selectClassById(result.insertId);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const updateClassByTeacherId = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateCLassByTeacherId(req.user.teacher.id, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherId(req.user.teacher.id);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const updateClassByTeacherIdAndDayOfWeek = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const updateClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

const deleteClassById = async (req, res) => {
    try {
        const { ClassId } = req.params;
        const [result] = await ClassHoursModel.deleteClassById(ClassId);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

const deleteClassByTeacherId = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherId(req.user.teacher.id);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

const deleteClassByTeacherIdAndDayOfWeek = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

const deleteClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

module.exports = {
    getAllClass,
    getClassById,
    getAllClassByTeacherId,
    getAllClassBySlot,
    getAllClassByDayOfWeek,
    getAllClassByTeacherIdAndDayOfWeek,
    getAllClassByTeacherIdAndSlot,
    getAllClassByTeacherIdAndDayOfWeekAndSlot,
    createClass,
    updateClassByTeacherId,
    updateClassByTeacherIdAndDayOfWeek,
    updateClassByTeacherIdAndDayOfWeekAndSlot,
    deleteClassById,
    deleteClassByTeacherId,
    deleteClassByTeacherIdAndDayOfWeek,
    deleteClassByTeacherIdAndDayOfWeekAndSlot
};