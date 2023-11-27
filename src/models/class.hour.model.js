const selectAllClass = () => {
    return db.query('SELECT * FROM class_hours');
};

const selectClassById = (id) => {
    return db.query('SELECT * FROM class_hours WHERE id = ?', [id]);
};

const selectClassByTeacherId = (teacherId) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ?', [teacherId]);
};

const selectClassBySlot = (slot) => {
    return db.query('SELECT * FROM class_hours WHERE slot = ?', [slot]);
};

const selectClassByDayOfWeek = (dayOfWeek) => {
    return db.query('SELECT * FROM class_hours WHERE day_of_week = ?', [dayOfWeek]);
};

const selectClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND day_of_week = ?', [teacherId, dayOfWeek]);
};

const selectClassByTeacherIdAndSlot = (teacherId, slot) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND slot = ?', [teacherId, slot]);
};

const selectClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, slot) => {
    return db.query('SELECT * FROM class_hours WHERE teacher_id = ? AND day_of_week = ?  AND slot = ?', [teacherId, dayOfWeek, slot]);
};

const insertClass = ({ day_of_week, start_time, end_time, slot, teacher_id }) => {
    return db.query('INSERT INTO class_hours (day_of_week, start_time, end_time, slot, teacher_id) VALUES (?, ?, ?, ?, ?)', [day_of_week, start_time, end_time, slot, teacher_id
    ]);
};

const updateClassByTeacherId = (teacherId, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ?', [day_of_week, start_time, end_time, slot, teacherId]);
};

const updateClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ? AND day_of_week = ?', [day_of_week, start_time, end_time, slot, teacherId, dayOfWeek]);
};

const updateClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, slot, { day_of_week, start_time, end_time, slot }) => {
    return db.query('UPDATE class_hours SET day_of_week = ?, start_time = ?, end_time = ?, slot = ? WHERE teacher_id = ? AND day_of_week = ? AND slot = ?', [day_of_week, start_time, end_time, slot, teacherId, dayOfWeek, slot]);
};

const deleteClassById = (id) => {
    return db.query('DELETE FROM class_hours WHERE id = ?', [id]);
};

const deleteClassByTeacherId = (teacherId) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ?', [teacherId]);
};

const deleteClassByTeacherIdAndDayOfWeek = (teacherId, dayOfWeek) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ? AND day_of_week = ?', [teacherId, dayOfWeek]);
};

const deleteClassByTeacherIdAndDayOfWeekAndSlot = (teacherId, dayOfWeek, slot) => {
    return db.query('DELETE FROM class_hours WHERE teacher_id = ? AND day_of_week = ? AND slot = ?', [teacherId, dayOfWeek, slot]);
};

module.exports = { selectAllClass, selectClassById, selectClassByTeacherId, selectClassBySlot, selectClassByTeacherIdAndDayOfWeek, selectClassByTeacherIdAndDayOfWeekAndSlot, selectClassByTeacherIdAndSlot, selectClassByDayOfWeek, insertClass, updateClassByTeacherId, updateClassByTeacherIdAndDayOfWeek, updateClassByTeacherIdAndDayOfWeekAndSlot, deleteClassByTeacherIdAndDayOfWeek, deleteClassByTeacherIdAndDayOfWeekAndSlot, deleteClassByTeacherId, deleteClassById };