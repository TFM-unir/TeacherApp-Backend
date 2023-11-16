const selectAllUsers = (id_role) => {
    return db.query('SELECT u.name, u.nickname, u.email, u.phone, u.age, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users u where u.role_id=? and l.id = u.location_id ', [id_role]);
}

const insertUser = ({ name, nickname, email, phone, password, age, status, role_id, location_id, photo }) => {
    return db.query('INSERT INTO users (name, nickname, email, phone, password, age, status, photo, role_id,location_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, nickname, email, phone, password, age, status, photo, role_id, location_id])
}

const selectUserById = (id) => {
    return db.query('SELECT u.name, u.nickname, u.email, u.phone, u.age, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users u where u.id=? and l.id = u.location_id', [id]);
}

const updateUserById = (id, { name, nickname, email, phone, password, age, status, role_id, location_id, photo }) => {
    return db.query('UPDATE users SET name= ?, nickname= ?, email= ?, phone= ?, password= ?, age= ?, status= ?, role_id = ?, location_id= ?, photo= ? WHERE id = ?', [name, nickname, email, phone, password, age, status, role_id, location_id, photo, id]);
}

const deleteUserById = (id) => {
    return db.query('DELETE FROM users WHERE id = ?', [id]);
}

module.exports = { selectAllUsers, insertUser, selectUserById, updateUserById, deleteUserById }