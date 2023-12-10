const RatingModel = require('../models/ratings.model');

// Función que obtiene todos los ratings
const getAllRatings = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get all Ratings.'
    try {
        const [ratings] = await RatingModel.selectAllratings();
        res.json(ratings);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que obtiene un rating por su ID
const getRatingById = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get a Rating.'
    const { id } = req.params;
    try {
        const [rating] = await RatingModel.selectRatingByRatingId(id);
        res.json(rating[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que obtiene los ratings asociados a un profesor por su ID
const getRatingsByTeacherId = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get all Ratings.'
    const { teacherId } = req.params;
    try {
        const [ratings] = await RatingModel.selectRatingByTeacherId(teacherId);
        res.json(ratings);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que obtiene los ratings asociados a un usuario por su ID
const getRatingsByUserId = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get all Ratings.'
    const { userId } = req.params;
    try {
        const [ratings] = await RatingModel.selectRatingByUserId(userId);
        res.json(ratings);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que obtiene un rating asociado a un usuario y profesor por sus respectivos IDs
const getRatingByUserIdAndTeacherId = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get a Rating.'
    const { teacherId, userId } = req.params;
    try {
        const rating = await RatingModel.selectRatingByUserIdAndTeacherId(teacherId, userId);
        res.json(rating);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Funcion que obtiene la media de los ratings de un teacher por su id
const getAverageRateByTeacherId = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to get the average rate of a Teacher'
    const { teacherId } = req.params;
    try {
        const [averageRate] = await RatingModel.selectAverageRateByTeacherId(teacherId);
        res.json(averageRate[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que crea un nuevo rating en la base de datos
const createRating = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to create a Rating.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Rating information.',
            required: true,
            schema: { $ref: "#/definitions/Ratings" }
    } */
    const { rating, comment_student, teacher_id, user_id } = req.body;
    try {
        const [result] = await RatingModel.insertRating({ rating, comment_student, teacher_id, user_id });
        const [newRating] = await RatingModel.selectRatingByRatingId(result.insertId);
        res.json(newRating[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que actualiza un rating por su ID con el comentario del profesor
const updateRating = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to update a Rating.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Rating information.',
            required: true,
            schema: { $ref: "#/definitions/Ratings" }
    } */
    const { id } = req.params;
    const { comment_teacher } = req.body;
    try {
        const [result] = await RatingModel.updateRatingById(id, comment_teacher);
        const [updatedRating] = await RatingModel.selectRatingByRatingId(id);
        res.json(updatedRating[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que elimina un rating por su ID
const deleteRatingById = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to delete a Rating.'
    const { id } = req.params;
    try {
        const [result] = await RatingModel.deleteRatingById(id);
        res.json({ message: 'Rating deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que elimina un rating asociado a un usuario y profesor por sus IDs
const deleteRatingByUserIdAndTeacherId = async (req, res) => {
    // #swagger.tags = ['Ratings']
    // #swagger.description = 'Endpoint to delete a Rating.'
    const { teacherId, userId } = req.params;
    try {
        const [result] = await RatingModel.deleteRatingByUserIdAndTeacherId(teacherId, userId);
        res.json({ message: 'Rating deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = {
    getAllRatings,
    getRatingById,
    getRatingsByTeacherId,
    getRatingsByUserId,
    getRatingByUserIdAndTeacherId,
    getAverageRateByTeacherId,
    createRating,
    updateRating,
    deleteRatingById,
    deleteRatingByUserIdAndTeacherId
};

