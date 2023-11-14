const router = require('express').Router();
const StudentsController = require('../../controllers/students.controllers');

router.get('/', StudentsController.getAllStudents);
router.post('/', StudentsController.createStudents);
router.get('/:studentId', StudentsController.getStudentById);
router.put('/:studentId', StudentsController.updateStudent);
router.delete('/:studentId', StudentsController.deleteStudent);

module.exports = router;