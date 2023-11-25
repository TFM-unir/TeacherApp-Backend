-- Seleccionamos la base de datos
USE teacher_app_db;

-- Llenar tabla departments con nombres de departamentos de ejemplo
INSERT INTO departments (department_name, description)
VALUES
('Matemáticas', 'Departamento dedicado a la enseñanza de matemáticas.'),
('Historia', 'Departamento encargado de la enseñanza de historia y geografía.'),
('Biología', 'Departamento dedicado al estudio de la Biología.'),
('Literatura', 'Departamento enfocado en la enseñanza de literatura y lenguaje.');

-- Llenar tabla locations con direcciones de ejemplo
INSERT INTO locations (latitude, longitude, address, city, province)
VALUES
(40.416775, -3.703790, 'Calle Falsa 123', 'Madrid', 'Madrid'),
(41.385063, 2.173404, 'Avinguda Diagonal 123', 'Barcelona', 'Barcelona'),
(37.389092, -5.984459, 'Calle Principal 456', 'Sevilla', 'Sevilla'),
(39.469907, -0.376288, 'Avenida Principal 789', 'Valencia', 'Valencia');

-- Llenar tabla roles con roles de ejemplo
INSERT INTO roles (role, description)
VALUES
('student', 'Rol asignado a los estudiantes'),
('teacher', 'Rol asignado a los profesores'),
('admin', 'Rol asignado a los administradores'),
('parent', 'Rol asignado a los padres de los estudiantes');

-- Llenar tabla users con usuarios de ejemplo (pueden ser tanto estudiantes como profesores)
INSERT INTO users (name, nickname, email, phone, password, creation_date, update_date, date_of_birth, status, photo, role_id, location_id)
VALUES
('Juan Pérez', 'juanito', 'juan.perez@example.com', '123456789', 'contraseña', '2023-11-15 08:00:00', '2023-11-15 08:00:00', '1990-05-15', 2, 'url_foto_juan', 3, 1),
('María López', 'malopez', 'maria.lopez@example.com', '987654321', 'password', '2023-11-16 10:00:00', '2023-11-16 10:00:00', '1985-03-05', 1, 'url_foto_maria', 2, 2),
('Carlos Gómez', 'carlitos', 'carlos.gomez@example.com', '555444333', 'contraseña123', '2023-11-17 12:00:00', '2023-11-17 12:00:00', '1978-08-03', 2, 'url_foto_carlos', 2, 3),
('Laura Martínez', 'lau', 'laura.martinez@example.com', '666777888', 'pass123', '2023-11-18 14:00:00', '2023-11-18 14:00:00', '1995-02-20', 3, 'url_foto_laura', 1, 4);

-- Llenar tabla teachers con datos de ejemplo
INSERT INTO teachers (experience, class_mode, price_hour, about_me, user_id)
VALUES
(5, 'Mañana', 30.50, 'Soy un apasionado de la enseñanza y me encanta ayudar a mis estudiantes a alcanzar su máximo potencial.', 1),
(3, 'Tarde', 25.00, 'He enseñado historia durante años y disfruto compartiendo mi conocimiento con los alumnos.', 2),
(7, 'Mañana', 40.00, 'Soy un apasionado de las ciencias naturales y disfruto enseñando Biología y Química.', 3),
(4, 'Tarde', 35.00, 'Me encanta la literatura y tengo experiencia enseñando varios idiomas extranjeros.', 4);

-- Llenar tabla subjects con las materias por profesor
INSERT INTO subjects (subject, teacher_id, department_id)
VALUES
('Trigonometría', 1, 1),
('Historia Medieval', 2, 2),
('Biología Forense', 3, 3),
('Literatura Anglosajona ', 4, 4);

-- Llenar tabla class_hours con horarios de clases de ejemplo
INSERT INTO class_hours (day_of_week, start_time, end_time, slot, teacher_id)
VALUES
('Lunes', '09:00:00', '11:00:00', 'Mañana', 1),
('Martes', '14:00:00', '16:00:00', 'Tarde', 2),
('Miércoles', '10:00:00', '12:00:00', 'Mañana', 3),
('Jueves', '16:00:00', '18:00:00', 'Tarde', 4);

-- Llenar tabla ratings con evaluaciones de ejemplo
INSERT INTO ratings (rating, comment_student, comment_teacher, creation_date, user_id, teacher_id)
VALUES
(4, 'Excelente profesor, muy claro en sus explicaciones.', 'Gracias','2023-11-15 10:00:00', 2, 1),
(5, 'Muy buen docente, recomiendo sus clases.','Gracias', '2023-11-16 15:30:00', 1, 2),
(3, 'El profesor es bueno pero las clases son algo aburridas.','Perdoname por eso, intentare mejorar', '2023-11-18 14:00:00', 4, 3),
(4, 'Las clases son dinámicas y entretenidas, aprendí mucho.','Me alegra mucho leer esto', '2023-11-18 14:00:00', 3, 4);

-- Llenar tabla chats con ejemplos
INSERT INTO chats (message, creation_date, boolean_teacher, user_id, teacher_id)
VALUES
('Hola, me gustaría saber más sobre las clases de matemáticas.', '2023-11-15 09:30:00', 0, 1, 2),
('Claro, estaré encantado de ayudarte con eso.', '2023-11-15 09:45:00', 1, 1, 2),
('Buenos días, quisiera agendar una clase de biología para mañana.', '2023-11-16 14:00:00', 0, 3, 4),
('Sí, tengo disponibilidad en la tarde. ¿A qué hora te gustaría?', '2023-11-16 14:15:00', 1, 3, 4);