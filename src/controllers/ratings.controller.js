const RatingModel = require('../models/ratings.model');

// Función que obtiene todos los ratings
const getAllRatings = async (req, res) => {
    try {
        const [ratings] = await RatingModel.selectAllratings();
        res.json(ratings);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que obtiene un rating por su ID
const getRatingById = async (req, res) => {
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
    const { teacherId, userId } = req.params;
    try {
        const [rating] = await RatingModel.selectRatingByUserIdAndTeacherId(teacherId, userId);
        res.json(rating[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que crea un nuevo rating en la base de datos
const createRatingById = async (req, res) => {
    const { rating, comment_student, teacherId, userId } = req.body;
    try {
        const [result] = await RatingModel.insertRating({ rating, comment_student, teacherId, userId });
        const [newRating] = await RatingModel.selectRatingByRatingId(result.insertId);
        res.json(newRating[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Función que actualiza un rating por su ID con el comentario del profesor
const updateRatingById = async (req, res) => {
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
    createRatingById,
    updateRatingById,
    deleteRatingById,
    deleteRatingByUserIdAndTeacherId
};

