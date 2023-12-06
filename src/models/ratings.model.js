//All Public

// Se obtienen todos los ratings de la tabla
const selectAllratings = () => {
    return db.query('SELECT * FROM ratings');
};

// Se obtiene un raiting por ID
const selectRatingByRatingId = (id) => {
    return db.query('SELECT * FROM ratings WHERE id = ?', [id]);
};

//Se obtiene un raiting por ID de teacher
const selectRatingByTeacherId = (teacherId) => {
    return db.query('SELECT * FROM ratings WHERE teacher_id = ?', [teacherId]);
};

//Se obtiene un raiting por ID de User
const selectRatingByUserId = (userId) => {
    return db.query('SELECT * FROM ratings WHERE user_id = ?', [userId]);
};

//Se obtiene un raiting en donde se encuentee un user y un teacher por sus respectivos ID (el match)
const selectRatingByUserIdAndTeacherId = (teacherId, userId) => {
    return db.query('SELECT * FROM ratings WHERE teacher_id = ? AND user_id = ?', [teacherId, userId]);
};

// Se obtiene la media d elos ratings de un teacher por su ID
const selectAverageRateByTeacherId = (teacherId) => {
    return db.query('SELECT AVG(rating) AS media_ratings FROM ratings WHERE teacher_id = ?', [teacherId]);
};

//Area del student (es el único que podría crear un rating)

//Se inserta y crea el raiting en la tabla de la BD
const insertRating = ({ rating, comment_student, teacherId, userId }) => {
    return db.query('INSERT INTO ratings (rating, comment_student, teacherId, userId) VALUES (?, ?, ?, ?)', [rating, comment_student, teacherId, userId]);
};

//Area del teacher (ya que el no puede crear un rating solo responder con u comentario)
const updateRatingById = (id, { comment_teacher }) => {
    return db.query('UPDATE ratings SET comment_teacher = ? WHERE id = ?', [comment_teacher, id]);
};

//Area del admin (podria eliminar o editar cualquier rating)

//Elimina un rating por id
const deleteRatingById = (id) => {
    return db.query('DELETE FROM ratings WHERE id = ?', [id]);
};

//Elimina un rating por el ID de teacher y user
const deleteRatingByUserIdAndTeacherId = (teacherId, userId) => {
    return db.query('DELETE FROM ratings WHERE teacher_id = ? AND user_id = ? ', [teacherId, userId]);
};

module.exports = {
    selectAllratings,
    selectRatingByRatingId,
    selectRatingByTeacherId,
    selectRatingByUserId,
    selectRatingByUserIdAndTeacherId,
    selectAverageRateByTeacherId,
    insertRating,
    updateRatingById,
    deleteRatingById,
    deleteRatingByUserIdAndTeacherId
};
