const { checkToken } = require('../middlewares/auth.middleware');

const router = require('express').Router();

// Rutas
//TODO: hay que ver mejor esto, por que tenemos que bloquear las ruas que no vayan a ser publicas y no s epuede sin definir cual es la publica.
router.use('/teachers', checkToken, require('./api/teachers'));
router.use('/students', checkToken, require('./api/students'));
router.use('/users', require('./api/users'));

router.use('/locations', require('./api/locations'));

router.use('/subjects', require('./api/subjects'));

module.exports = router;