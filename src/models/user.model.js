const selectAllUsers = (id_role) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users u where u.role_id=? and l.id = u.location_id ', [id_role]);
};
const selectUserById = (id) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province FROM locations as l, users as u where u.id=? and l.id = u.location_id', [id]);
};

//recuperamos el usuario sin la tabla de location
const selectUserByIdWhithOutLocation = (id) => {
    return db.query('SELECT u.id, u.name, u.nickname, u.email, u.phone, DATE_FORMAT(u.date_of_birth, "%Y-%m-%d") as date_of_birth, u.status, u.photo, u.role_id, u.location_id FROM users as u where u.id=?', [id]);
};

const selectLocationByUserId = (userId) => {
    return db.query('SELECT l.id, l.latitude, l.longitude, l.address, l.city, l.province FROM teacher_app_db.locations as l JOIN teacher_app_db.users ON users.location_id = l.id WHERE users.id = ?', [userId]);
}

const insertUser = ({ name, nickname, email, phone, password, date_of_birth, status, role_id, location_id, photo }) => {
    return db.query('INSERT INTO teacher_app_db.users (name, nickname, email, phone, password, date_of_birth, status, photo, role_id,location_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, nickname, email, phone, password, date_of_birth, status, photo, role_id, location_id])
};

// manejador para insertlocation mientras decidimos que rumbo tomamos
const insertLocation = ({ latitude, longitude, address, city, province }) => {
    return db.query('INSERT INTO teacher_app_db.locations (latitude, longitude, address, city, province) VALUES (?, ?, ?, ?, ?)', [latitude, longitude, address, city, province]);
};

const updateUserLocationId = (location_id, user_id) => {
    return db.query('UPDATE teacher_app_db.users SET location_id = ? WHERE id = ?', [location_id, user_id]);
}

const updateUserById = (id, { name, nickname, email, phone, password, age, status, role_id, location_id, photo }) => {
    return db.query('UPDATE users SET name= ?, nickname= ?, email= ?, phone= ?, password= ?, age= ?, status= ?, role_id = ?, location_id= ?, photo= ? WHERE id = ?', [name, nickname, email, phone, password, age, status, role_id, location_id, photo, id]);
};

const deleteUserById = (id) => {
    return db.query('UPDATE users set status=3 WHERE id = ?', [id]);
};


//TODO: tenemos que modificar esto un poco, no se puede colocar en el usuario un location_id sin haber ante rellenado la tabla de dirección, entonces primero rellenamos la tabla de dirección, recuperamos el id y se lo colocamos al usuario.   Igual que el role_id, pero este último lo podemos poner como predeterminado desde el front, que mande siempre un numero que sea usuario normal y el otro que sea admin solo se podrá poner cuando el admin le otorgue los poderes.


module.exports = { selectAllUsers, insertUser, selectUserById, updateUserById, deleteUserById, insertLocation, selectUserByIdWhithOutLocation, selectLocationByUserId, updateUserLocationId }
