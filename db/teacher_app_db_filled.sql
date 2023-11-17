CREATE DATABASE  IF NOT EXISTS `teacher_app_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `teacher_app_db`;
-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: teacher_app_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class_hours`
--

DROP TABLE IF EXISTS `class_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_hours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day_of_week` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Campo que va a contener el día de la semana del horario indicado. “Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”',
  `start_time` time NOT NULL COMMENT 'start_time: horario de inicio de las clases',
  `end_time` time NOT NULL COMMENT 'end_time: campo que indica el horario de finalización de las clases.',
  `slot` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'slot: campo que indica el slot horario de las clases “mañana”, “tarde”, “noche”.',
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_class_hours_teachers1_idx` (`teacher_id`),
  CONSTRAINT `fk_class_hours_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_hours`
--

LOCK TABLES `class_hours` WRITE;
/*!40000 ALTER TABLE `class_hours` DISABLE KEYS */;
INSERT INTO `class_hours` VALUES (1,'Lunes','09:00:00','11:00:00','Mañana',1),(2,'Martes','14:00:00','16:00:00','Tarde',2),(3,'Miércoles','10:00:00','12:00:00','Mañana',3),(4,'Jueves','16:00:00','18:00:00','Tarde',4);
/*!40000 ALTER TABLE `class_hours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'department_name: campo que hace referencia al nombre del departamento',
  `description` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'description: campo que hace referencia a la descripción del departamento.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Matemáticas','Departamento dedicado a la enseñanza de matemáticas.'),(2,'Historia','Departamento encargado de la enseñanza de historia y geografía.'),(3,'Biología','Departamento dedicado al estudio de la Biología.'),(4,'Literatura','Departamento enfocado en la enseñanza de literatura y lenguaje.');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `latitude` double NOT NULL COMMENT 'latitude: campo que va a contener la latitud al ubicarse automáticamente',
  `longitude` double NOT NULL COMMENT 'longitude: campo que va a contener la latitud al ubicarse automáticamente',
  `address` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'address: campo que va a contener la dirección completa.',
  `city` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'citie: campo que contiene el nombre de la ciudad de residencia.',
  `province` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'province: campo que contiene el nombre de la provincia de residencia.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,40.416775,-3.70379,'Calle Falsa 123','Madrid','Madrid'),(2,41.385063,2.173404,'Avinguda Diagonal 123','Barcelona','Barcelona'),(3,37.389092,-5.984459,'Calle Principal 456','Sevilla','Sevilla'),(4,39.469907,-0.376288,'Avenida Principal 789','Valencia','Valencia');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL COMMENT 'rating: campo que va a contener el numero dado de puntuación en un rango entre 0 y 5.',
  `comment` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'comment: campo que va a contener el comentario asociado a la puntuación.',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation_date: campo destinado a contener la fecha de creación del rating del comment con la formula (Now()).',
  `provider` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'provider: campo que hace referencia a si es un estudiante o el teacher el que genera dicha puntuación y comentario',
  `teacher_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ratings_teachers1_idx` (`teacher_id`),
  KEY `fk_ratings_users1_idx` (`user_id`),
  CONSTRAINT `fk_ratings_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `fk_ratings_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,4,'Excelente profesor, muy claro en sus explicaciones.','2023-11-15 10:00:00','student',1,2),(2,5,'Muy buen docente, recomiendo sus clases.','2023-11-16 15:30:00','student',2,1),(3,3,'El profesor es bueno pero las clases son algo aburridas.','2023-11-17 09:30:00','student',3,4),(4,4,'Las clases son dinámicas y entretenidas, aprendí mucho.','2023-11-18 14:00:00','student',4,3);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'role: campo destinado a contener el rol de los usuarios',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'description: campo destinado a contener la descripción del rol de los usuarios.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'student','Rol asignado a los estudiantes'),(2,'teacher','Rol asignado a los profesores'),(3,'admin','Rol asignado a los administradores'),(4,'parent','Rol asignado a los padres de los estudiantes');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id: campo que representa el id único del profesor\n',
  `experience` int NOT NULL COMMENT 'experience: campo que indica los años de experiencia del profesor',
  `subjects` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'subjects: campo que indica las materias que imparte dicho profesor',
  `price_hour` decimal(10,2) NOT NULL COMMENT 'price_hour: campo que indica el precio/hora del profesor.',
  `about_me` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'about_me: campo que hace énfasis en una breve descripción del profesor.',
  `department_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_teachers_departments_idx` (`department_id`),
  KEY `fk_teachers_users1_idx` (`user_id`),
  CONSTRAINT `fk_teachers_departments` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `fk_teachers_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,5,'Matemáticas, Física',30.50,'Soy un apasionado de la enseñanza y me encanta ayudar a mis estudiantes a alcanzar su máximo potencial.',1,1),(2,3,'Historia, Geografía',25.00,'He enseñado historia durante años y disfruto compartiendo mi conocimiento con los alumnos.',2,2),(3,7,'Biología, Química',40.00,'Soy un apasionado de las ciencias naturales y disfruto enseñando Biología y Química.',3,3),(4,4,'Literatura, Idiomas',35.00,'Me encanta la literatura y tengo experiencia enseñando varios idiomas extranjeros.',4,4);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'name: campo destinado a contener el nombre y apellido de los usuarios (students y teachers).\n',
  `nickname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nickname: campo que contiene el sobrenombre del usuario',
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'email: campo que contiene el email del usuario.',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'phone: campo destinado a contener el número de teléfono del usuario',
  `password` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'password: campo que contiene la contraseña del usuario encriptada (por eso decidimos colocar tinytext).',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation_date: campo destinado a contener la fecha de creación del usuario con la formula (Now()).',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'update_date: campo que contiene la fecha de modificación de usuario.',
  `date_of_birth` date NOT NULL COMMENT 'age: campo que indica la edad del usuario.',
  `status` tinyint(1) NOT NULL COMMENT '“no validado” = 1\n“validado” = 2\n“baja” = 3',
  `photo` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'photo: campo que hace referencia a la URL de la imagen del usuario.',
  `role_id` int NOT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  KEY `fk_users_roles1_idx` (`role_id`),
  KEY `fk_users_locations1_idx` (`location_id`),
  CONSTRAINT `fk_users_locations1` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan Pérez','juanito','juan.perez@example.com','123456789','contraseña','2023-11-15 08:00:00','2023-11-15 08:00:00','1990-05-15',2,'url_foto_juan',3,1),(2,'María López','malopez','maria.lopez@example.com','987654321','password','2023-11-16 10:00:00','2023-11-16 10:00:00','1985-03-05',1,'url_foto_maria',2,2),(3,'Carlos Gómez','carlitos','carlos.gomez@example.com','555444333','contraseña123','2023-11-17 12:00:00','2023-11-17 12:00:00','1978-08-03',2,'url_foto_carlos',2,3),(4,'Laura Martínez','lau','laura.martinez@example.com','666777888','pass123','2023-11-18 14:00:00','2023-11-18 14:00:00','1995-02-20',3,'url_foto_laura',1,4);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-17 19:11:23
