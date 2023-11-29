// Requerimos el router para manejar las rutas
const router = require('express').Router();
// Requerimsos el controlador
const UsersController = require('../../controllers/users.controller');
// delagamos la ruta al controlador respectivamente del registro y del login

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
//router.post('/location', UsersController.location);


module.exports = router;
