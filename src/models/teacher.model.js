const selectAllTeachers = (order = asc) => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
    FROM teacher_app_db.teachers as t 
    join teacher_app_db.users as u on t.user_id = u.id
    join teacher_app_db.locations as l on u.location_id = l.id
    join teacher_app_db.departments as d on t.department_id = d.id
    ORDER BY u.name ?;`, [order]);
};

const selectAllTeachersByState = (status, order = asc) => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
    FROM teacher_app_db.teachers as t 
    join teacher_app_db.users as u on t.user_id = u.id
    join teacher_app_db.locations as l on u.location_id = l.id
    join teacher_app_db.departments as d on t.department_id = d.id
    where u.status = ?
    ORDER BY u.name ?;`, [status, order]);
};

const selectAllTeachersSortedBy = (field, order = asc) => { //field = campo para filtrar / order = ascendente o descendente
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
    FROM teacher_app_db.teachers as t 
    join teacher_app_db.users as u on t.user_id = u.id
    join teacher_app_db.locations as l on u.location_id = l.id
    join teacher_app_db.departments as d on t.department_id = d.id
    where u.status = 2
    ORDER BY ? ?;`, [field, order]);
};

const selectTeacherById = (id) => {
    return db.query(`SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
    FROM teacher_app_db.teachers as t 
    join teacher_app_db.users as u on t.user_id = u.id
    join teacher_app_db.locations as l on u.location_id = l.id
    join teacher_app_db.departments as d on t.department_id = d.id
    where u.id = ?;`, [id]);
};

//cambiar tabla para ser la de user todo y poder cambiar todo
const insertTeacher = ({ experience, subjects, price_hour, about_me, department_id, user_id }) => {
    return db.query(`INSERT INTO teacher_app_db.teachers (experience, subjects, price_hour, about_me, department_id, user_id)
    VALUES (?,?,?,?,?);`, [experience, subjects, price_hour, about_me, department_id, user_id]);
};

const updateTeacherById = (id, { name, nickname, email, phone, password, update_date, date_of_birth, photo, latitude, longitud, address, city, province, experience, subjects, price_hour, about_me, department }) => {
    return db.query(`UPDATE teacher_app_db.teachers as t
    JOIN teacher_app_db.users as u on t.user_id = u.id
    join teacher_app_db.locations as l on u.location_id = l.id
    join teacher_app_db.departments as d on t.department_id = d.id
    SET u.name = ? , u.nickname = ?, u.email = ?, u.phone = ?, u.password = ?, u.update_date = ?, u.date_of_birth = ?, u.photo = ?, l.latitude = ?, l.longitud = ?, l.address = ?, l.city = ?, l.province = ?, t.experience = ?, t.subjects = ?, t.price_hour = ?, t.about_me = ?, t.department = ?
    WHERE u.id = ?;`, [name, nickname, email, phone, password, update_date, date_of_birth, photo, latitude, longitud, address, city, province, experience, subjects, price_hour, about_me, department, id]);
};

const deleteTeacherById = (id) => {
    //return db.query(`DELETE FROM teacher_app_db.teachers WHERE t.id = ?`, [id]);
    return db.query(`UPDATE teacher_app_db.teachers as t
    JOIN teacher_app_db.users as u on t.user_id = u.id
    SET u.status = 3
    WHERE t.id = ?;`, [id]);
};

module.exports = { selectAllTeachers, insertTeacher, selectTeacherById, updateTeacherById, deleteTeacherById, selectAllTeachersByState, selectAllTeachersSortedBy };