const selectAllTeachers = () => {
    return db.query('SELECT * FROM users WHERE role_id = 2 ');
}

const insertTeacher = ({ nombre, email, imagen_url }) => {
    // TODO: COPIADO DE STUDENT.MODEL. CAMBIAR
    // return db.query('INSERT INTO users (nombre, email, imagen_url, role_id) VALUES (?, ?, ?, 2)', [nombre, email, imagen_url])
}

const selectTeacherById = (id) => {
    // TODO: COPIADO DE STUDENT.MODEL. CAMBIAR
    // return db.query('SELECT * FROM users WHERE id = ?', [id]);
}

const updateTeacherById = (id, { nombre, email, imagen_url }) => {
    // TODO: COPIADO DE STUDENT.MODEL. CAMBIAR
    // return db.query('UPDATE users SET nombre = ?, email = ?, imagen_url = ? WHERE id = ?', [nombre, email, imagen_url, id]);
}

const deleteTeacherById = (id) => {
    // TODO: COPIADO DE STUDENT.MODEL. CAMBIAR
    // return db.query('DELETE FROM users WHERE id = ?', [id]);
}

module.exports = { selectAllTeachers, insertTeacher, selectTeacherById, updateTeacherById, deleteTeacherById };