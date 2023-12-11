const router = require('express').Router();
const LocationsController = require('../../controllers/locations.controllers');

router.get('/', LocationsController.getAllLocations);
router.get('/:subjectId', LocationsController.getLocationById);
router.post('/', LocationsController.createLocation);
router.put('/:subjectId', LocationsController.updateLocation);
router.delete('/:subjectId', LocationsController.deleteLocation);

module.exports = router;