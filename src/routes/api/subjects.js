const router = require('express').Router();
const SubjectsController = require('../../controllers/subjects.controllers');
const { checkSubjectTeacher } = require('../../middlewares/subjects.middleware');

router.get('/', SubjectsController.getAllSubjects);
router.get('/teacher/:teacherId', SubjectsController.getAllSubjectsByTeacherId);
router.get('/:subjectId', SubjectsController.getSubjectById);
router.post('/', checkSubjectTeacher, SubjectsController.createSubject);
router.put('/:subjectId', SubjectsController.updateSubject);
router.delete('/:subjectId', SubjectsController.deleteSubject);

module.exports = router;