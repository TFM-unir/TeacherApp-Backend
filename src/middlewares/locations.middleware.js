const LocationsModel = require('../models/location.model.js');

const checkDuplicates = async (req, res, next) => {
    const { latitude, longitude, address, city, province } = req.body;
    try {
        const [location] = await LocationsModel.checkLocation(latitude, longitude, address, city, province);
        
        if (location.length === 0) {
            next();
        } else {
            res.json(location[0])
            return;
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkDuplicates }