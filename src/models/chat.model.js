// Se obtienen todos los chats de la tabla
const selectAllChats = () => {
    return db.query('SELECT * FROM chats');
};

// Se obtiene un chat por ID
const selectChatById = (id) => {
    return db.query('SELECT * FROM chats WHERE id = ?', [id]);
};

//Se obtienen todos los chats del teacher por ID de teacher
const selectChatsByTeacherId = (teacherId) => {
    return db.query('SELECT * FROM chats WHERE teacher_id = ?', [teacherId]);
};

//Se obtienen todos los chats del user por ID de User
const selectChatsByUserId = (userId) => {
    return db.query('SELECT * FROM chats WHERE user_id = ?', [userId]);
};

//Se obtiene un chat en donde se encuentee un user y un teacher por sus respectivos ID (el match) y dependiendo del boolean trae unos u otros
const selectChatByUserIdAndTeacherId = (teacherId, userId) => {
    return db.query('SELECT * FROM chats WHERE teacher_id = ? AND user_id = ?', [teacherId, userId]);
};

//Se obtienen todos los chats del teacher por ID de teacher y dependiendo del boolean trae unos u otros
const selectChatsByTeacherIdAndBoolean = (teacherId, boolean) => {
    return db.query('SELECT * FROM chats WHERE teacher_id = ? AND boolean_teacher = ?', [teacherId, boolean]);
};

//Se obtienen todos los chats del user por ID de User y dependiendo del boolean trae unos u otros
const selectChatsByUserIdAndBoolean = (userId, boolean) => {
    return db.query('SELECT * FROM chats WHERE user_id = ? AND boolean_teacher = ?', [userId, boolean]);
};

//Se obtiene un chat en donde se encuentee un user y un teacher por sus respectivos ID (el match) y dependiendo del boolean trae unos u otros
const selectChatByUserIdAndTeacherIdAndBoolean = (teacherId, userId, boolean) => {
    return db.query('SELECT * FROM chats WHERE teacher_id = ? AND user_id = ? AND boolean_teacher = ?', [teacherId, userId, boolean]);
};

//Se inserta y crea el chat en la tabla de la BD
const insertChat = ({ message, boolean_teacher, userId, teacherId }) => {
    return db.query('INSERT INTO chats (message, boolean_teacher, user_id, teacher_id) VALUES (?, ?, ?, ?)', [message, boolean_teacher, userId, teacherId]);
};

//Se actualiza un mensaje del chat
const updateChatById = (id, { message }) => {
    return db.query('UPDATE chats SET message = ? WHERE id = ?', [message, id]);
};

//Area del admin (podria eliminar cualquier Chat o mensajes)

//Elimina un rating por id
const deleteChatById = (id) => {
    return db.query('DELETE FROM chats WHERE id = ?', [id]);
};

//Elimina un rating por el ID de teacher y user
const deleteChatByUserIdAndTeacherId = (teacherId, userId) => {
    return db.query('DELETE FROM chats WHERE teacher_id = ? AND user_id = ? ', [teacherId, userId]);
};

//Elimina los chats asociados a un match pero con el boolean osea o todos los del profe o todos los del alumno
const deleteChatByUserIdAndTeacherIdAndBoolean = (teacherId, userId, boolean) => {
    return db.query('DELETE FROM chats WHERE teacher_id = ? AND user_id = ? AND boolean_teacher = ?', [teacherId, userId, boolean]);
};

module.exports = {
    selectAllChats,
    selectChatById,
    selectChatsByTeacherId,
    selectChatsByUserId,
    selectChatByUserIdAndTeacherId,
    selectChatsByTeacherIdAndBoolean,
    selectChatsByUserIdAndBoolean,
    selectChatByUserIdAndTeacherIdAndBoolean,
    insertChat,
    updateChatById,
    deleteChatById,
    deleteChatByUserIdAndTeacherId,
    deleteChatByUserIdAndTeacherIdAndBoolean
};




