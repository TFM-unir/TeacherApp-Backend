const router = require('express').Router();
const DepartmentsController = require('../../controllers/departments.controllers');

router.get('/', DepartmentsController.getAllDepartments);

router.get('/:departmentId', DepartmentsController.getDepartmentById);
router.post('/', DepartmentsController.createDepartment);
router.put('/:departmentId', DepartmentsController.updateDepartment);
router.delete('/:departmentId', DepartmentsController.deleteDepartment);

module.exports = router;