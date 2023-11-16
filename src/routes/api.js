const router = require('express').Router();

// Rutas
router.use('/teachers', require('./api/teachers'));
router.use('/students', require('./api/students'));

module.exports = router;