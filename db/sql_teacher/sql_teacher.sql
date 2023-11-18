### Query para obtener todos los teachers validados
SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
FROM teacher_app_db.teachers as t 
join teacher_app_db.users as u on t.user_id = u.id
join teacher_app_db.locations as l on u.location_id = l.id
join teacher_app_db.departments as d on t.department_id = d.id
where u.status = 2
ORDER BY u.name asc;

SELECT u.name, u.nickname, u.date_of_birth, u.status, u.photo, l.city, t.experience, t.subjects, t.price_hour, t.about_me, d.department_name 
FROM teacher_app_db.teachers as t 
join teacher_app_db.users as u on t.user_id = u.id
join teacher_app_db.locations as l on u.location_id = l.id
join teacher_app_db.departments as d on t.department_id = d.id
where u.id = ?
ORDER BY u.name asc;

## añadir teacher
INSERT INTO teacher_app_db.teachers (experience, subjects, price_hour, about_me, department_id, user_id)
VALUES (experience, subjects, price_hour, about_me, department_id, user_id);

## Actualizar
UPDATE teacher_app_db.teachers as t
JOIN teacher_app_db.users as u on t.user_id = u.id
join teacher_app_db.locations as l on u.location_id = l.id
join teacher_app_db.departments as d on t.department_id = d.id
SET u.name = ? , u.nickname = ?, u.email = ?, u.phone = ?, u.password = ?, u.update_date = ?, u.date_of_birth = ?, u.photo = ?, l.latitude = ?, l.longitud = ?, l.address = ?, l.city = ?, l.province = ?, t.experience = ?, t.subjects = ?, t.price_hour = ?, t.about_me = ?, t.department = ?
WHERE t.id = ?;

## no es eliminar sino desactivar -> status en la tabla users
DELETE FROM teacher_app_db.teachers WHERE t.id = 3;
UPDATE teacher_app_db.teachers as t
JOIN teacher_app_db.users as u on t.user_id = u.id
SET u.status = 2
WHERE t.id = 1;