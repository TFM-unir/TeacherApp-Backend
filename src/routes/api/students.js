const router = require('express').Router();
const StudentsController = require('../../controllers/students.controllers');
const StudentsMiddleware = require('../../middlewares/students.middleware');

router.get('/', StudentsController.getAllStudents);
router.get('/:studentId', StudentsMiddleware.checkStudentById, StudentsController.getStudentById);
router.post('/', StudentsController.createStudent);
router.put('/:studentId', StudentsMiddleware.checkStudentById, StudentsController.updateStudent);
router.delete('/:studentId', StudentsMiddleware.checkStudentById, StudentsController.deleteStudent);

module.exports = router;