const UserModel = require('./user.model');

const selectAllTeachers = () => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province, t.experience, t.class_mode, t.price_hour, t.about_me, s.subject, d.department_name 
    FROM teachers as t 
    join users as u on t.user_id = u.id
    join locations as l on u.location_id = l.id
    join subjects as s on s.teacher_id = t.id
    join departments as d on s.department_id = d.id
    ORDER BY u.name;`);
};

const selectAllTeachersByState = (status, order = asc) => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province, t.experience, t.class_mode, t.price_hour, t.about_me, s.subject, d.department_name 
    FROM teachers as t 
    join users as u on t.user_id = u.id
    join locations as l on u.location_id = l.id
    join subjects as s on s.teacher_id = t.id
    join departments as d on s.department_id = d.id
    where u.status = ?
    ORDER BY u.name ?;`, [status, order]);
};

const selectAllTeachersSortedBy = (field, order = asc) => { //field = campo para filtrar / order = ascendente o descendente
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province, t.experience, t.class_mode, t.price_hour, t.about_me, s.subject, d.department_name 
    FROM teachers as t 
    join users as u on t.user_id = u.id
    join locations as l on u.location_id = l.id
    join subjects as s on s.teacher_id = t.id
    join departments as d on s.department_id = d.id
    ORDER BY ? ?;`, [field, order]);
};

const selectTeacherById = (id) => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.latitude, l.longitude, l.address, l.city, l.province, t.experience, t.class_mode, t.price_hour, t.about_me, s.subject, d.department_name 
    FROM teachers as t 
    join users as u on t.user_id = u.id
    join locations as l on u.location_id = l.id
    join subjects as s on s.teacher_id = t.id
    join departments as d on s.department_id = d.id
    where u.id = ?;`, [id]);
};

const selectTeacherOnlyTableById = (id) => {
    return db.query('SELECT * FROM teachers WHERE id = ?', [id]);
};

const insertTeacher = ({ experience, class_mode, price_hour, about_me, user_id }) => {
    return db.query(`INSERT INTO teachers (experience, class_mode, price_hour, about_me, user_id)
    VALUES (?,?,?,?,?);`, [experience, class_mode, price_hour, about_me, user_id]);
};

//con datos que vienen del formulario (update perfil)
const updateFullTeacherById = (id, { name, nickname, email, phone, password, update_date, date_of_birth, photo, latitude, longitud, address, city, province, experience, class_mode, price_hour, about_me }) => {
    return db.query(`UPDATE teachers as t
    JOIN users as u on t.user_id = u.id
    join locations as l on u.location_id = l.id
    SET u.name = ? , u.nickname = ?, u.email = ?, u.phone = ?, u.password = ?, u.update_date = ?, u.date_of_birth = ?, u.photo = ?, l.latitude = ?, l.longitud = ?, l.address = ?, l.city = ?, l.province = ?, t.experience = ?, t.class_mode = ?, t.price_hour = ?, t.about_me = ?
    WHERE u.id = ?;`, [name, nickname, email, phone, password, update_date, date_of_birth, photo, latitude, longitud, address, city, province, experience, class_mode, price_hour, about_me, id]);
};


const updateTeacherById = (id, { experience, class_mode, price_hour, about_me }) => {
    return db.query(`UPDATE teachers
    SET experience = ?, class_mode = ?, price_hour = ?, about_me = ?
    WHERE id = ?;`, [experience, class_mode, price_hour, about_me, id]);
};

//el id que se recibe es el del user. no podemos usar el id teachers porque la tabla teacher guarda datos adicionales del profesor
const deleteTeacherById = (id) => {
    return UserModel.deleteUserById(id)
};

module.exports = { selectAllTeachers, selectTeacherOnlyTableById, insertTeacher, selectTeacherById, updateTeacherById, deleteTeacherById, selectAllTeachersByState, selectAllTeachersSortedBy, updateFullTeacherById };