const router = require('express').Router();
const LocationsController = require('../../controllers/locations.controllers');

router.get('/', LocationsController.getAllLocations);
router.get('/:locationId', LocationsController.getLocationById);
router.post('/', LocationsController.createLocation);
router.put('/:locationId', LocationsController.updateLocation);
router.delete('/:locationId', LocationsController.deleteLocation);

module.exports = router;