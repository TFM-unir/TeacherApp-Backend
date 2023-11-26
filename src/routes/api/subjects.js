const router = require('express').Router();
const SubjectsController = require('../../controllers/subjects.controllers');

router.get('/', SubjectsController.getAllSubjects);
router.get('/teacher/:teacherId', SubjectsController.getAllSubjectsByTeacherId);
router.get('/:subjectId', SubjectsController.getSubjectById);
router.post('/', SubjectsController.createSubject);
router.put('/:subjectId', SubjectsController.updateSubject);
router.delete('/:subjectId', SubjectsController.deleteSubject);

module.exports = router;