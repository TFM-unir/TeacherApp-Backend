const router = require('express').Router();

// Rutas
router.use('/teachers', require('./api/teachers'));

//crear ruta de students
router.use('/students', require('./api/students'));

module.exports = router;