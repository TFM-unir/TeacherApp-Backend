const UserModel = require('./user.model');

const selectAllStudents = () => {
    return UserModel.selectAllUsers(1)
}

const insertStudent = (body) => {
    return UserModel.insertUser(body)
}

const selectStudentById = (id) => {
    return UserModel.selectUserById(id)
}

const updateStudentById = (id, body) => {
    return UserModel.updateUserById(id, body)
}

const deleteStudentById = (id) => {
    return UserModel.deleteUserById(id)
}

module.exports = { selectAllStudents, insertStudent, selectStudentById, updateStudentById, deleteStudentById }