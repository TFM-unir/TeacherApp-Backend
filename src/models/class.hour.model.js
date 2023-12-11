// Selecciona todas las clases
const selectAllClass = () => {
    return db.query('SELECT * FROM class_hours');
};

// Selecciona una clase por su ID
const selectClassById = (id) => {
    return db.query('SELECT * FROM class_hours WHERE id = ?', [id]);
};

// Selecciona clases por el ID del profesor
const selectClassByTeacherId = (teacherId) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ?', [teacherId]);
};

// Selecciona las clases por slot
const selectClassBySlot = (slot) => {
    return db.query('SELECT * FROM class_hours WHERE slot = ?', [slot]);
};

// Selecciona las clases por día de semana
const selectClassByDayOfWeek = (dayOfWeek) => {
    return db.query('SELECT * FROM class_hours WHERE day_of_week = ?', [dayOfWeek]);
};

// selecciona las clases por teacher Id y por día de semana
const selectClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND day_of_week = ?', [teacherId, dayOfWeek]);
};

//Selecciona las clases por teacher Id y por Slot
const selectClassByTeacherIdAndSlot = (teacherId, slot) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND slot = ?', [teacherId, slot]);
};

//Selecciona las clases por Teahcer ID, dia de semana y por slot
const selectClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, slot) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND day_of_week = ?  AND slot = ?', [teacherId, dayOfWeek, slot]);
};

//Selecciona las clases por User ID, pero lo he modificado comento esta par aver si la elimino despues de presentarla
// const selectClassByUserId = (userId) => {
//     return db.query('SELECT * FROM class_hours WHERE user_id = ?', [userId]);
// };

// Inserta una nueva clase en la base de datos
const insertClass = ({ day_of_week, start_time, end_time, slot, teacher_id }) => {
    return db.query('INSERT INTO class_hours (day_of_week, start_time, end_time, slot, teacher_id) VALUES (?, ?, ?, ?, ?)', [day_of_week, start_time, end_time, slot, teacher_id
    ]);
};

// Actualiza una clase existente a través del teacher ID en la base de datos
const updateClassByTeacherId = (teacherId, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ?', [day_of_week, start_time, end_time, slot, teacherId]);
};

// Actualiza una clase existente a través del teacher ID y day of week en la base de datos
const updateClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ? AND day_of_week = ?', [day_of_week, start_time, end_time, slot, teacherId, dayOfWeek]);
};

// Actualiza una clase existente a través del teacher ID y day of week y el slot en la base de datos
const updateClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, frame, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ? AND day_of_week = ? AND slot = ?', [day_of_week, start_time, end_time, slot, teacherId, dayOfWeek, frame]);
};

// Elimina una clase existente a través del ID d ela clase en la base de datos
const deleteClassById = (id) => {
    return db.query('DELETE FROM class_hours WHERE id = ?', [id]);
};

// eliminar una clase por el teacher Id
const deleteClassByTeacherId = (teacherId) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ?', [teacherId]);
};

// Eliminar una clase utilizando el teacher Id y el día de la semana
const deleteClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ? AND day_of_week = ?', [teacherId, dayOfWeek]);
};

// Eliminar una clase utilizando el teacher Id, el día de la semana y el Slot
const deleteClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, slot) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ? AND day_of_week = ? AND slot = ?', [teacherId, dayOfWeek, slot]);
};

//Realizamos el model para el Student

//con esto buscamos en toda la tabla que nos aporte todos los horarios que ese estudiante esta inscrito
const getStudentClassByUserId = (userId) => {
    return db.query('SELECT * FROM class_hours WHERE id_user1 = ? OR id_user2 = ? OR id_user3 = ? OR id_user4 = ? OR id_user5 = ?', [userId, userId, userId, userId, userId]);
};

//con esto buscamos el slot available en la base de datos para poder ingresar el id del usuario correspondiente.
const findClassAvailableSlot = (teacherId, dayOfWeek, slot) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND day_of_week = ? AND slot = ? AND (id_user1 IS NULL OR id_user2 IS NULL OR id_user3 IS NULL OR id_user4 IS NULL OR id_user5 IS NULL) LIMIT 1', [teacherId, dayOfWeek, slot]);
};

//con esto somos capaces de hacer el update correspondiente del slot e introducir el id del useren en la clase 
const UpdateClassByStudentIdAndClassId = (userId, classId, emptySlot) => {
    return db.query(`UPDATE class_hours SET id_user1 = CASE WHEN '${emptySlot}' = 'id_user1' THEN ${userId} ELSE id_user1 END, id_user2 = CASE WHEN '${emptySlot}' = 'id_user2' THEN ${userId} ELSE id_user2 END, id_user3 = CASE WHEN '${emptySlot}' = 'id_user3' THEN ${userId} ELSE id_user3 END, id_user4 = CASE WHEN '${emptySlot}' = 'id_user4' THEN ${userId} ELSE id_user4 END, id_user5 = CASE WHEN '${emptySlot}' = 'id_user5' THEN ${userId} ELSE id_user5 END WHERE id = ${classId}`);
};

//Con esta función somos capaces de dar de baja al student de todas sus clases suscritas
const withdrawAllStudentClassByUserId = (userId) => {
    return db.query('UPDATE class_hours SET id_user1 = CASE WHEN id_user1 = ? THEN NULL ELSE id_user1 END, id_user2 = CASE WHEN id_user2 = ? THEN NULL ELSE id_user2 END, id_user3 = CASE WHEN id_user3 = ? THEN NULL ELSE id_user3 END, id_user4 = CASE WHEN id_user4 = ? THEN NULL ELSE id_user4 END, id_user5 = CASE WHEN id_user5 = ? THEN NULL ELSE id_user5 END WHERE id_user1 = ? OR id_user2 = ? OR id_user3 = ? OR id_user4 = ? OR id_user5 = ?', [userId, userId, userId, userId, userId, userId, userId, userId, userId, userId]);
};

//Con esta función somos capaces de borrar o dar de baja al estudiante de un bloque horario concreto
const withdrawClassSlotByStudentIdAndClassId = (userId, classId) => {
    return db.query('UPDATE class_hours SET id_user1 = CASE WHEN id_user1 = ? THEN NULL ELSE id_user1 END, id_user2 = CASE WHEN id_user2 = ? THEN NULL ELSE id_user2 END, id_user3 = CASE WHEN id_user3 = ? THEN NULL ELSE id_user3 END, id_user4 = CASE WHEN id_user4 = ? THEN NULL ELSE id_user4 END, id_user5 = CASE WHEN id_user5 = ? THEN NULL ELSE id_user5 END WHERE id = ?', [userId, userId, userId, userId, userId, classId]);
};


//Con esta función somos capaces de dar de baja a un estudiante de todas las clases de un profesor en concreto

const withdrawStudentFromTeacherClass = (teacherId, userId) => {
    return db.query('UPDATE class_hours SET id_user1 = CASE WHEN id_user1 = ? THEN NULL ELSE id_user1 END, id_user2 = CASE WHEN id_user2 = ? THEN NULL ELSE id_user2 END, id_user3 = CASE WHEN id_user3 = ? THEN NULL ELSE id_user3 END, id_user4 = CASE WHEN id_user4 = ? THEN NULL ELSE id_user4 END, id_user5 = CASE WHEN id_user5 = ? THEN NULL ELSE id_user5 END WHERE teacher_id = ? AND (id_user1 = ? OR id_user2 = ? OR id_user3 = ? OR id_user4 = ? OR id_user5 = ?)', [userId, userId, userId, userId, userId, teacherId, userId, userId, userId, userId, userId]);
};

module.exports = {
    selectAllClass, selectClassById, selectClassByTeacherId, selectClassBySlot, selectClassByTeacherIdAndDayOfWeek, selectClassByTeacherIdAndDayOfWeekAndSlot, selectClassByTeacherIdAndSlot, selectClassByDayOfWeek, insertClass, updateClassByTeacherId, updateClassByTeacherIdAndDayOfWeek, updateClassByTeacherIdAndDayOfWeekAndSlot, deleteClassByTeacherIdAndDayOfWeek, deleteClassByTeacherIdAndDayOfWeekAndSlot, deleteClassByTeacherId, deleteClassById, getStudentClassByUserId, findClassAvailableSlot, UpdateClassByStudentIdAndClassId, withdrawAllStudentClassByUserId, withdrawClassSlotByStudentIdAndClassId, withdrawStudentFromTeacherClass
};