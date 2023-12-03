const router = require('express').Router();
const LocationsController = require('../../controllers/locations.controllers');
const { checkDuplicates } = require('../../middlewares/locations.middleware');

router.get('/', LocationsController.getAllLocations);
router.get('/:subjectId', LocationsController.getLocationById);
router.post('/', checkDuplicates ,LocationsController.createLocation);
router.put('/:subjectId', LocationsController.updateLocation);
router.delete('/:subjectId', LocationsController.deleteLocation);

module.exports = router;