const router = require('express').Router();
const ClassHoursController = require('../../controllers/class.hours.controllers');

//TODO: Modificar esto para mañana
// Rutas que necesitan el parámetro teacherId en la URL
// router.get('/:teacherId', ClassHoursController.getAllClassByTeacherId);
// router.get('/:teacherId/:dayOfWeek', ClassHoursController.getAllClassByTeacherIdAndDayOfWeek);
// router.get('/:teacherId/:slot', ClassHoursController.getAllClassByTeacherIdAndSlot);
// router.get('/:teacherId/:dayOfWeek/:slot', ClassHoursController.getAllClassByTeacherIdAndDayOfWeekAndSlot);
// router.put('/:teacherId', ClassHoursController.updateClassByTeacherId);
// router.put('/:teacherId/:dayOfWeek', ClassHoursController.updateClassByTeacherIdAndDayOfWeek);
// router.put('/:teacherId/:dayOfWeek/:slot', ClassHoursController.updateClassByTeacherIdAndDayOfWeekAndSlot);
// router.delete('/:teacherId', ClassHoursController.deleteClassByTeacherId);
// router.delete('/:teacherId/:dayOfWeek', ClassHoursController.deleteClassByTeacherIdAndDayOfWeek);
// router.delete('/:teacherId/:dayOfWeek/:slot', ClassHoursController.deleteClassByTeacherIdAndDayOfWeekAndSlot);

// // Otras rutas que no necesitan el parámetro teacherId
// router.get('/', ClassHoursController.getAllClass);
// router.get('/:ClassId', ClassHoursController.getClassById);
// router.get('/slot/:slot', ClassHoursController.getAllClassBySlot);
// router.get('/dayOfWeek/:dayOfWeek', ClassHoursController.getAllClassByDayOfWeek);
// router.post('/', ClassHoursController.createClass);
// router.delete('/delete/:ClassId', ClassHoursController.deleteClassById);

module.exports = router;