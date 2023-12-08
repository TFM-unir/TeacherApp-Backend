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
(40.4167754, -3.7037902, 'Puerta del Sol', 'Madrid', 'Madrid'),
(41.3850639, 2.1734035, 'Sagrada Familia', 'Barcelona', 'Barcelona'),
(37.3890924, -5.9844598, 'Plaza de España', 'Sevilla', 'Sevilla'),
(39.46975, -0.37739, 'Ciudad de las Artes y las Ciencias', 'Valencia', 'Valencia'),
(43.2630126, -2.9349852, 'Guggenheim Museum Bilbao', 'Bilbao', 'Vizcaya'),
(28.4636296, -16.2518472, 'Playa de las Teresitas', 'Santa Cruz de Tenerife', 'Santa Cruz de Tenerife'),
(39.8628316, -4.0273231, 'Alcázar de Toledo', 'Toledo', 'Toledo'),
(37.9838096, -1.1306339, 'Catedral de Murcia', 'Murcia', 'Murcia'),
(43.362347, -8.4115398, 'Torre de Hércules', 'A Coruña', 'A Coruña'),
(41.6488226, -0.8890852, 'Basílica del Pilar', 'Zaragoza', 'Zaragoza'),
(42.8188001, -1.6449663, 'Ciudadela de Pamplona', 'Pamplona', 'Navarra'),
(39.5700601, 2.649834, 'Catedral de Mallorca', 'Palma de Mallorca', 'Islas Baleares'),
(28.1235459, -15.4362574, 'Playa de las Canteras', 'Las Palmas de Gran Canaria', 'Las Palmas'),
(37.1894662, -3.6066355, 'Alhambra de Granada', 'Granada', 'Granada'),
(43.5293103, -5.6773205, 'Catedral de Oviedo', 'Oviedo', 'Asturias');

-- Llenar tabla roles con roles de ejemplo
INSERT INTO roles (role, description)
VALUES
('student', 'Rol asignado a los estudiantes'),
('teacher', 'Rol asignado a los profesores'),
('admin', 'Rol asignado a los administradores');

-- Llenar tabla users con usuarios de ejemplo (pueden ser tanto estudiantes como profesores)
INSERT INTO users (name, nickname, email, phone, password, creation_date, update_date, date_of_birth, status, photo, role_id, location_id)
VALUES
('Juan Pérez', 'juanito', 'juan.perez@example.com', '123456789', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-15 08:00:00', '2023-11-15 08:00:00', '1990-05-15', 2, 'https://i.pravatar.cc/500?u=clemente.alonzomayorga@peticiones.online', 3, 1),
('María López', 'malopez', 'maria.lopez@example.com', '987654321', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-16 10:00:00', '2023-11-16 10:00:00', '1985-03-05', 1, 'https://i.pravatar.cc/500?u=mariadelcarmen.herreravillanueva@peticiones.online', 1, 2),
('Carlos Gómez', 'carlitos', 'carlos.gomez@example.com', '555444333', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-17 12:00:00', '2023-11-17 12:00:00', '1978-08-03', 2, 'https://i.pravatar.cc/500?u=mario.mejiaburgos@peticiones.online', 1, 3),
('Laura Martínez', 'lau', 'laura.martinez@example.com', '666777888', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-18 14:00:00', '2023-11-18 14:00:00', '1995-02-20', 3, 'https://i.pravatar.cc/500?u=debora.bandaalcala@peticiones.online', 2, 4),
('Steban Segundo', 'stb', 'steban.perez@example.com', '123456781', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-15 08:00:00', '2023-11-15 08:00:00', '1990-05-15', 2, 'https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online', 2, 5),
('María Nuñez', 'manu', 'maria.nunez@example.com', '987654322', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-16 10:00:00', '2023-11-16 10:00:00', '1985-03-05', 1, 'https://i.pravatar.cc/500?u=marisol.venegasjurado@peticiones.online', 2, 6),
('Daniela Gómez', 'dani', 'dani.gomez@example.com', '555444334', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-17 12:00:00', '2023-11-17 12:00:00', '1978-08-03', 2, 'https://i.pravatar.cc/500?u=daniela.griegosolorio@peticiones.online', 2, 7),
('Armando Pereasedillo', 'armi', 'armando.pereasedillo@example.com', '666777889', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-18 14:00:00', '2023-11-18 14:00:00', '1995-02-20', 3, 'https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online', 2, 8),
('Gonzalo Alvarez', 'gonza', 'gonzalo.alvarezotero@peticiones.online', '123456782', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-15 08:00:00', '2023-11-15 08:00:00', '1990-05-15', 2, 'https://i.pravatar.cc/500?u=gonzalo.alvarezotero@peticiones.online', 2, 9),
('Norma Torrez', 'norma', 'norma.torresnevarez@peticiones.online', '987654323', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-16 10:00:00', '2023-11-16 10:00:00', '1985-03-05', 1, 'https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online', 2, 10),
('Ernesto Alariz', 'ernie', 'ernesto.alanizcorral@peticiones.online', '555444335', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-17 12:00:00', '2023-11-17 12:00:00', '1978-08-03', 2, 'https://i.pravatar.cc/500?u=ernesto.alanizcorral@peticiones.online', 2, 11),
('Graciela Ponce', 'graci', 'graciela.ponceabeyta@peticiones.online', '666777880', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-18 14:00:00', '2023-11-18 14:00:00', '1995-02-20', 3, 'https://i.pravatar.cc/500?u=graciela.ponceabeyta@peticiones.online', 2, 12),
('Rosa Polanco', 'ros', 'rosa.polancomelgar@peticiones.online', '987654324', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-16 10:00:00', '2023-11-16 10:00:00', '1985-03-05', 1, 'https://i.pravatar.cc/500?u=rosa.polancomelgar@peticiones.online', 2, 13),
('Raul Ibarra', 'rau', 'raul.ibarral@peticiones.online', '555444336', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-17 12:00:00', '2023-11-17 12:00:00', '1978-08-03', 2, 'https://i.pravatar.cc/500?u=raul.ibarraechevarria@peticiones.online', 2, 14),
('Jose zapata', 'pepe', 'gjosemaria.zapatabravo@peticiones.online', '666777881', '$2a$10$L7NutDbu/E0XtYpw0rsUHeqAVZrim/hGfTa5B7Cbmmkw3f9.bpziK', '2023-11-18 14:00:00', '2023-11-18 14:00:00', '1995-02-20', 3, 'https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online', 2, 15);

-- Llenar tabla teachers con datos de ejemplo
INSERT INTO teachers (experience, class_mode_online, class_mode_in_person, price_hour, about_me, user_id)
VALUES
(5, true, true, 30.50, 'Soy un apasionado de la enseñanza y me encanta ayudar a mis estudiantes a alcanzar su máximo potencial.', 4),
(3,  true, false, 25.00, 'He enseñado historia durante años y disfruto compartiendo mi conocimiento con los alumnos.', 5),
(7,  true, true, 40.00, 'Soy un apasionado de las ciencias naturales y disfruto enseñando Biología y Química.', 6),
(4,  true, false, 35.00, 'Me encanta la literatura y tengo experiencia enseñando varios idiomas extranjeros.', 7),
(3, false, true, 20.50, 'Soy un apasionado de la enseñanza y me encanta ayudar a mis estudiantes a alcanzar su máximo potencial.', 8),
(3,  true, false, 15.00, 'He enseñado historia durante años y disfruto compartiendo mi conocimiento con los alumnos.', 9),
(2,  false, true, 18.00, 'Soy un apasionado de las ciencias naturales y disfruto enseñando Biología y Química.', 10),
(4,  true, false, 13.00, 'Me encanta la literatura y tengo experiencia enseñando varios idiomas extranjeros.', 11),
(4, false, true, 19.50, 'Soy un apasionado de la enseñanza y me encanta ayudar a mis estudiantes a alcanzar su máximo potencial.', 12),
(2,  true, false, 17.50, 'He enseñado historia durante años y disfruto compartiendo mi conocimiento con los alumnos.', 13),
(4,  false, true, 16.00, 'Soy un apasionado de las ciencias naturales y disfruto enseñando Biología y Química.', 14),
(5,  true, false, 52.00, 'Me encanta la literatura y tengo experiencia enseñando varios idiomas extranjeros.', 15);

-- Llenar tabla subjects con las materias por profesor
INSERT INTO subjects (subject, teacher_id, department_id)
VALUES
('Trigonometría', 1, 1),
('Historia Medieval', 2, 2),
('Biología Forense', 3, 3),
('Literatura Anglosajona ', 4, 4),
('Algebra', 5, 1),
('Historia Mundial', 6, 2),
('Biología Marina', 7, 3),
('Literatura Inglesa ', 8, 4),
('Diferenciales', 9, 1),
('Historia De America', 10, 2),
('Biología Felina', 11, 3),
('Literatura Egipcia ', 12, 4);

-- Llenar tabla class_hours con horarios de clases de ejemplo
INSERT INTO class_hours (day_of_week, start_time, end_time, slot, teacher_id, id_user1, id_user2, id_user3, id_user4, id_user5)
VALUES
('Lunes', '08:00:00', '10:00:00', 'Mañana', 1, 2, 3, NULL, NULL, NULL),
('Lunes', '15:00:00', '17:00:00', 'Tarde', 2, 2, NULL, NULL, NULL, NULL),
('Martes', '13:00:00', '15:00:00', 'Tarde', 3, 3, 2, NULL, NULL, NULL),
('Martes', '16:00:00', '18:00:00', 'Tarde', 4, 3, NULL, NULL, NULL, NULL),
('Miércoles', '08:00:00', '10:00:00', 'Mañana', 5, 2, 3, NULL, NULL, NULL),
('Miércoles', '15:00:00', '17:00:00', 'Tarde', 6, 2, NULL, NULL, NULL, NULL),
('Jueves', '13:00:00', '15:00:00', 'Tarde', 7, 1, 2, 3, NULL, NULL),
('Jueves', '16:00:00', '18:00:00', 'Tarde', 8, 3, NULL, NULL, NULL, NULL),
('Viernes', '08:00:00', '10:00:00', 'Mañana', 9, 2, 3, NULL, NULL, NULL),
('Viernes', '15:00:00', '17:00:00', 'Tarde', 10, 3, NULL, NULL, NULL, NULL),
('Martes', '13:00:00', '15:00:00', 'Tarde', 11, 3, 2, NULL, NULL, NULL),
('Martes', '16:00:00', '18:00:00', 'Tarde', 12, 3, NULL, NULL, NULL, NULL),
('Miércoles', '08:00:00', '10:00:00', 'Mañana', 1, 2, 3, NULL, NULL, NULL),
('Miércoles', '15:00:00', '17:00:00', 'Tarde', 2, 2, NULL, NULL, NULL, NULL),
('Jueves', '13:00:00', '15:00:00', 'Tarde', 3, 1, 2, 3, NULL, NULL),
('Jueves', '16:00:00', '18:00:00', 'Tarde', 4, 3, NULL, NULL, NULL, NULL),
('Lunes', '08:00:00', '10:00:00', 'Mañana', 5, 2, 3, NULL, NULL, NULL),
('Lunes', '15:00:00', '17:00:00', 'Tarde', 6, 2, NULL, NULL, NULL, NULL),
('Martes', '13:00:00', '15:00:00', 'Tarde', 7, 3, 2, NULL, NULL, NULL),
('Martes', '16:00:00', '18:00:00', 'Tarde', 8, 3, NULL, NULL, NULL, NULL),
('Miércoles', '08:00:00', '10:00:00', 'Mañana', 9, 2, 3, NULL, NULL, NULL),
('Miércoles', '15:00:00', '17:00:00', 'Tarde', 10, 2, NULL, NULL, NULL, NULL),
('Jueves', '13:00:00', '15:00:00', 'Tarde', 11, 1, 2, 3, NULL, NULL),
('Jueves', '16:00:00', '18:00:00', 'Tarde', 12, 3, NULL, NULL, NULL, NULL),
('Viernes', '08:00:00', '10:00:00', 'Mañana', 1, 2, 3, NULL, NULL, NULL),
('Viernes', '15:00:00', '17:00:00', 'Tarde', 1, 3, NULL, NULL, NULL, NULL);

-- Llenar tabla ratings con evaluaciones de ejemplo
INSERT INTO ratings (rating, comment_student, comment_teacher, creation_date, user_id, teacher_id)
VALUES
(4, 'Excelente profesor, muy claro en sus explicaciones.', 'Gracias','2023-11-15 10:00:00', 2, 4),
(5, 'Muy buen docente, recomiendo sus clases.','Gracias', '2023-11-16 15:30:00', 3, 5),
(3, 'El profesor es bueno pero las clases son algo aburridas.','Perdoname por eso, intentare mejorar', '2023-11-18 14:00:00', 2, 6),
(4, 'Las clases son dinámicas y entretenidas, aprendí mucho.','Me alegra mucho leer esto', '2023-11-18 14:00:00', 3, 7);

-- Llenar tabla chats con ejemplos
INSERT INTO chats (message, creation_date, boolean_teacher, user_id, teacher_id)
VALUES
('Hola, me gustaría saber más sobre las clases de matemáticas.', '2023-11-15 09:30:00', 0, 2, 4),
('Claro, estaré encantado de ayudarte con eso.', '2023-11-15 09:45:00', 1, 2, 4),
('Buenos días, quisiera agendar una clase de biología para mañana.', '2023-11-16 14:00:00', 0, 3, 6),
('Sí, tengo disponibilidad en la tarde. ¿A qué hora te gustaría?', '2023-11-16 14:15:00', 1, 3, 6);
