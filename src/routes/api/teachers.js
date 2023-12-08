const router = require('express').Router();
const TeacherController = require('../../controllers/teachers.controller');

// Peticiones GET
router.get('/', TeacherController.getAllTeachers);
router.get('/pagination/:page/:perPage', TeacherController.getAllTeachersPagination);
router.get('/:teacherId', TeacherController.getTeacherById);
router.get('/:teacherState', TeacherController.getAllTeachersByState);


//Peticiones POST
router.post('/', TeacherController.createTeacher);

//Peticiones PUT
router.put('/:teacherId', TeacherController.updateTeacher);

//Peticiones DELETE
router.delete('/:teacherId', TeacherController.deleteTeacher);

module.exports = router;