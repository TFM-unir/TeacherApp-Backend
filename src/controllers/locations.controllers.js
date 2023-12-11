const LocationModel = require('../models/location.model');

const getAllLocations = async (req, res) => {
    /**#swagger.tags = ['Locations']
       #swagger.description = 'Endpoint to get all Locations.'
    */
    try {
        const [result] = await LocationModel.selectAllLocations();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createLocation = async (req, res) => {
    // #swagger.tags = ['Locations']
    // #swagger.description = 'Endpoint to create a Location.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Location information.',
            required: true,
            schema: { $ref: "#/definitions/Locations" }
    } */
    try {
        const [location] = await LocationModel.insertLocationNoDuplicate(req.body)
        res.json(location[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getLocationById = async (req, res) => {
    /**#swagger.tags = ['Locations']
       #swagger.description = 'Endpoint to get a Location.'
    */
    try {
        const { locationId } = req.params;

        const [location] = await LocationModel.selectLocationById(locationId);
        res.json(location[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateLocation = async (req, res) => {
    // #swagger.tags = ['Locations']
    // #swagger.description = 'Endpoint to update a Location.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Location information.',
            required: true,
            schema: { $ref: "#/definitions/Locations" }
    } */
    try {
        const { locationId } = req.params;
        const [result] = await LocationModel.updateLocationById(locationId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Location does not change ');
        } else {
            res.status(200).send("Location modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteLocation = async (req, res) => {
    /**#swagger.tags = ['Locations']
       #swagger.description = 'Endpoint to delete a Location.'
    */
    try {
        const { locationId } = req.params;
        const [result] = await LocationModel.deleteLocationById(locationId);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    }
}

module.exports = { getAllLocations, createLocation, getLocationById, deleteLocation, updateLocation }