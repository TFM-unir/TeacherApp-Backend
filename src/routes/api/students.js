const router = require('express').Router();
const StudentsController = require('../../controllers/students.controllers');

router.get('/', StudentsController.getAllStudents);
router.get('/:studentId', StudentsController.getStudentById);
router.post('/', StudentsController.createStudent);
router.put('/:studentId', StudentsController.updateStudent);
router.delete('/:studentId', StudentsController.deleteStudent);

module.exports = router;