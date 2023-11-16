const selectAllStudents = () => {
    return db.query('SELECT * FROM users WHERE role_id = 1 ');
}

const insertStudent = ({ name, nickname, email, phone, password, age, photo }) => {
    // TODO: QUERYS A VARIAS TABLAS? 
    return db.query('INSERT INTO users (name, nickname, email, phone, password, age, photo, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, 1)', [name, nickname, email, phone, password, age, photo])
}

const selectStudentById = (id) => {
    // CONFIRMAR: Especificar el role_id no es necesario: (SELECT * FROM users WHERE role_id = 1 AND id = ?). Lo mismo con las funciones updateStudentById y deleteStudentById, no?
    return db.query('SELECT * FROM users WHERE id = ?', [id]);
}

const updateStudentById = (id, { nombre, email, imagen_url }) => {
    // TODO: CONFIRMAR PARÁMETROS Y ACTUALIZAR
    return db.query('UPDATE users SET nombre = ?, email = ?, imagen_url = ? WHERE id = ?', [nombre, email, imagen_url, id]);
}

const deleteStudentById = (id) => {
    return db.query('DELETE FROM users WHERE id = ?', [id]);
}

module.exports = { selectAllStudents, insertStudent, selectStudentById, updateStudentById, deleteStudentById }