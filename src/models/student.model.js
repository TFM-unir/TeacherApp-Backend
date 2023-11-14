const selectAllStudents = () => {
    return db.query('SELECT * FROM Students');
}

const insertStudent = ({ nombre, email, imagen_url }) => {
    return db.query('INSERT INTO Students (nombre, email, imagen_url) VALUES (?,?,?)',
        [nombre, email, imagen_url])
}

const selectStudentById = (id) => {
    return db.query('SELECT * FROM Students WHERE idStudentes= ?', [id]);
}
const updateStudentById = (id, { nombre, email, imagen_url }) => {
    return db.query('UPDATE Students SET nombre=?, email=?, imagen_url=? WHERE idStudentes=?', [nombre, email, imagen_url, id]);
}

const deleteStudentById = (id) => {
    return db.query('DELETE  FROM Studentes WHERE idStudentes= ?', [id]);
}

module.exports = { selectAllStudents, insertStudent, selectStudentById, updateStudentById, deleteStudentById }