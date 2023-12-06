const router = require('express').Router();
const RatingController = require('../../controllers/ratings.controller');

// Rutas para obtener todos los ratings
router.get('/', RatingController.getAllRatings);

// Ruta para obtener un rating por su ID
router.get('/:id', RatingController.getRatingById);

// Ruta para obtener ratings por ID de teacher
router.get('/teacher/:teacherId', RatingController.getRatingsByTeacherId);

// Ruta para obtener el promedio de los rating a través de un ID de teacher
router.get('/prom/teacher/:teacherId', RatingController.getAverageRateByTeacherId);

// Ruta para obtener ratings por ID de usuario
router.get('/user/:userId', RatingController.getRatingsByUserId);

// Ruta para obtener un rating por ID de usuario y teacher
router.get('/user/:userId/teacher/:teacherId', RatingController.getRatingByUserIdAndTeacherId);

// Ruta para crear un rating
router.post('/', RatingController.createRating);

// Ruta para actualizar un rating por su ID
router.put('/:id', RatingController.updateRating);

// Ruta para eliminar un rating por su ID
router.delete('/:id', RatingController.deleteRatingById);

// Ruta para eliminar un rating por ID de usuario y teacher
router.delete('/user/:userId/teacher/:teacherId', RatingController.deleteRatingByUserIdAndTeacherId);


module.exports = router;