const router = require('express').Router();

// Rutas
router.use('/teachers', require('./api/teachers'));

module.exports = router;