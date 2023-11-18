const router = require('express').Router();

// Rutas
//TODO: hay que ver mejor esto, por que tenemos que bloquear las ruas que no vayan a ser publicas y no s epuede sin definir cual es la publica.
router.use('/teachers', require('./api/teachers'));
router.use('/students', require('./api/students'));
router.use('/users', require('./api/users'));

module.exports = router;