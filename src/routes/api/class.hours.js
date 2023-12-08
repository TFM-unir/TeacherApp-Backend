const router = require('express').Router();
const ClassHoursController = require('../../controllers/class.hours.controllers');


// GET
router.get('/', ClassHoursController.getAllClass);
router.get('/class/:classId', ClassHoursController.getClassById);
router.get('/slot', ClassHoursController.getAllClassBySlot);
router.get('/dayOfWeek', ClassHoursController.getAllClassByDayOfWeek);
router.get('/teacher/:teacherId', ClassHoursController.getAllClassByTeacherId);
router.get('/teacher-day/:teacherId', ClassHoursController.getAllClassByTeacherIdAndDayOfWeek);
router.get('/teacher-slot/:teacherId', ClassHoursController.getAllClassByTeacherIdAndSlot);
router.get('/teacher-day-slot/:teacherId', ClassHoursController.getAllClassByTeacherIdAndDayOfWeekAndSlot);
router.get('/student/:userId', ClassHoursController.getStudentClassByUserId);
router.get('/findAvailableSlot', ClassHoursController.findClassAvailableSlot);

// POST
router.post('/create', ClassHoursController.createClass);



// PUT
router.put('/updateByTeacherId', ClassHoursController.updateClassByTeacherId);
router.put('/updateByTeacherIdAndDayOfWeek', ClassHoursController.updateClassByTeacherIdAndDayOfWeek);
router.put('/updateByTeacherIdAndDayOfWeekAndSlot', ClassHoursController.updateClassByTeacherIdAndDayOfWeekAndSlot);
router.put('/updateByStudentIdAndClassId/:userId', ClassHoursController.UpdateClassByStudentIdAndClassId);
router.put('/withdrawClassSlot/:userId/:classId', ClassHoursController.withdrawClassSlotByStudentIdAndClassId);
router.put('/withdrawAllStudentClass/:userId', ClassHoursController.withdrawAllStudentClassByUserId);
router.put('/withdrawStudentFromTeacherClass/:teacherId/:userId', ClassHoursController.withdrawStudentFromTeacherClass);

// No hay rutas PUT definidas en el controlador proporcionado.

// DELETE
router.delete('/delete/:ClassId', ClassHoursController.deleteClassById);
router.delete('/deleteByTeacherId', ClassHoursController.deleteClassByTeacherId);
router.delete('/deleteByTeacherIdAndDayOfWeek', ClassHoursController.deleteClassByTeacherIdAndDayOfWeek);
router.delete('/deleteByTeacherIdAndDayOfWeekAndSlot', ClassHoursController.deleteClassByTeacherIdAndDayOfWeekAndSlot);

module.exports = router;