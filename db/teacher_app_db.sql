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
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'message: campo relacionado al mensaje que se va a representar en el chat.\n',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation_date: campo que indica la fecha de creación del mensaje.',
  `boolean_teacher` tinyint(1) NOT NULL COMMENT 'Campo que relaciona e indica si es o no el teacher el que genera el comentario.',
  `user_id` int NOT NULL,
  `teacher_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_chats_users1_idx` (`user_id`),
  KEY `fk_chats_teachers1_idx` (`teacher_id`),
  CONSTRAINT `fk_chats_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `fk_chats_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_hours`
--

DROP TABLE IF EXISTS `class_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_hours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day_of_week` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Campo que va a contener el día de la semana del horario indicado. “Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”',
  `start_time` time NOT NULL COMMENT 'start_time: horario de inicio de las clases',
  `end_time` time NOT NULL COMMENT 'end_time: campo que indica el horario de finalización de las clases.',
  `slot` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'slot: campo que indica el slot horario de las clases “mañana”, “tarde”, “noche”.',
  `teacher_id` int NOT NULL,
  `id_user1` int DEFAULT NULL,
  `id_user2` int DEFAULT NULL,
  `id_user3` int DEFAULT NULL,
  `id_user4` int DEFAULT NULL,
  `id_user5` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_class_hours_teachers1_idx` (`teacher_id`),
  CONSTRAINT `fk_class_hours_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_hours`
--

LOCK TABLES `class_hours` WRITE;
/*!40000 ALTER TABLE `class_hours` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
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
  `address` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'address: campo que va a contener la dirección completa.',
  `city` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'citie: campo que contiene el nombre de la ciudad de residencia.',
  `province` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'province: campo que contiene el nombre de la provincia de residencia.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
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
  `comment_student` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'comment_student: campo que va a contener el comentario asociado a la puntuación.',
  `comment_teacher` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'comment_teacher: campo que va a contener el comentario asociado a la puntuación.',
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation_date: campo destinado a contener la fecha de creación del rating del comment con la formula (Now()).',
  `teacher_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ratings_teachers1_idx` (`teacher_id`),
  KEY `fk_ratings_users1_idx` (`user_id`),
  CONSTRAINT `fk_ratings_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`),
  CONSTRAINT `fk_ratings_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
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
  `role` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'role: campo destinado a contener el rol de los usuarios',
  `description` text COLLATE utf8mb4_unicode_ci COMMENT 'description: campo destinado a contener la descripción del rol de los usuarios.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'subject: campo que indica la materia que imparte dicho profesor',
  `teacher_id` int NOT NULL,
  `department_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_subjects_teachers1_idx` (`teacher_id`),
  KEY `fk_subjects_departments1_idx` (`department_id`),
  CONSTRAINT `fk_subjects_departments1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `fk_subjects_teachers1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
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
  `price_hour` decimal(10,2) NOT NULL COMMENT 'price_hour: campo que indica el precio/hora del profesor.',
  `class_mode_in_person` tinyint NOT NULL COMMENT 'class_mode: campo relacionado con el tipo de clase si es presencial o si es online.',
  `class_mode_online` tinyint NOT NULL,
  `about_me` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'about_me: campo que hace énfasis en una breve descripción del profesor.',
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_teachers_users1_idx` (`user_id`),
  CONSTRAINT `fk_teachers_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
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
  `location_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  KEY `fk_users_roles1_idx` (`role_id`),
  KEY `fk_users_locations1_idx` (`location_id`),
  CONSTRAINT `fk_users_locations1` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2023-12-06 23:26:45
