const selectAllUsers = (id_role) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users u where u.role_id=? and l.id = u.location_id ', [id_role]);
};

const selectUserById = (id) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, DATE_FORMAT(u.date_of_birth, "%Y-%m-%d") as date_of_birth, u.status, u.photo, u.role_id, u.location_id, u.creation_date, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users as u where u.id=? and l.id = u.location_id', [id]);
};

const selectUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email = ?', [email]);
};

//recuperamos el usuario sin la tabla de location
const selectUserByIdWhithOutLocation = (id) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, DATE_FORMAT(u.date_of_birth, "%Y-%m-%d") as date_of_birth, u.status, u.photo, u.role_id, u.location_id FROM users as u where u.id=?', [id]);
};

const insertUser = ({ name, nickname, email, phone, password, date_of_birth, status, role_id, location_id, photo }) => {
    return db.query('INSERT INTO users (name, nickname, email, phone, password, date_of_birth, status, photo, role_id,location_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, nickname, email, phone, password, date_of_birth, status, photo, role_id, location_id])
};

const updateUserLocationId = (location_id, user_id) => {
    return db.query('UPDATE users SET location_id = ? WHERE id = ?', [location_id, user_id]);
}

const updateUserById = (id, { name, nickname, email, phone, password, age, status, role_id, location_id, photo }) => {
    return db.query('UPDATE users SET name= ?, nickname= ?, email= ?, phone= ?, password= ?, age= ?, status= ?, role_id = ?, location_id= ?, photo= ? WHERE id = ?', [name, nickname, email, phone, password, age, status, role_id, location_id, photo, id]);
};

const deleteUserById = (id) => {
    return db.query('UPDATE users set status=3 WHERE id = ?', [id]);
};

module.exports = { selectAllUsers, insertUser, selectUserById, selectUserByEmail, updateUserById, deleteUserById, selectUserByIdWhithOutLocation, updateUserLocationId }
