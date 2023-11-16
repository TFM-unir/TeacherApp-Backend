-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema teacher_app_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `teacher_app_db` ;

-- -----------------------------------------------------
-- Schema teacher_app_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teacher_app_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `teacher_app_db` ;

-- -----------------------------------------------------
-- Table `teacher_app_db`.`departments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`departments` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`departments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `department_name` VARCHAR(60) NOT NULL COMMENT 'department_name: campo que hace referencia al nombre del departamento',
  `description` MEDIUMTEXT NULL COMMENT 'description: campo que hace referencia a la descripción del departamento.',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`roles` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(25) NOT NULL COMMENT 'role: campo destinado a contener el rol de los usuarios',
  `description` TEXT NULL COMMENT 'description: campo destinado a contener la descripción del rol de los usuarios.',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`locations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`locations` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `latitude` DOUBLE NOT NULL COMMENT 'latitude: campo que va a contener la latitud al ubicarse automáticamente',
  `longitude` DOUBLE NOT NULL COMMENT 'longitude: campo que va a contener la latitud al ubicarse automáticamente',
  `address` VARCHAR(120) NOT NULL COMMENT 'address: campo que va a contener la dirección completa.',
  `city` VARCHAR(80) NOT NULL COMMENT 'citie: campo que contiene el nombre de la ciudad de residencia.',
  `province` VARCHAR(80) NOT NULL COMMENT 'province: campo que contiene el nombre de la provincia de residencia.',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`users` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL COMMENT 'name: campo destinado a contener el nombre y apellido de los usuarios (students y teachers).\n',
  `nickname` VARCHAR(60) NULL COMMENT 'nickname: campo que contiene el sobrenombre del usuario',
  `email` VARCHAR(100) NOT NULL COMMENT 'email: campo que contiene el email del usuario.',
  `phone` VARCHAR(20) NOT NULL COMMENT 'phone: campo destinado a contener el número de teléfono del usuario',
  `password` TINYTEXT NOT NULL COMMENT 'password: campo que contiene la contraseña del usuario encriptada (por eso decidimos colocar tinytext).',
  `creation_date` DATETIME NOT NULL DEFAULT Now() COMMENT 'creation_date: campo destinado a contener la fecha de creación del usuario con la formula (Now()).',
  `update_date` DATETIME NOT NULL COMMENT 'update_date: campo que contiene la fecha de modificación de usuario.',
  `age` INT NOT NULL COMMENT 'age: campo que indica la edad del usuario.',
  `status` TINYINT(1) NOT NULL COMMENT '“no validado” = 1\n“validado” = 2\n“baja” = 3',
  `photo` TINYTEXT NOT NULL COMMENT 'photo: campo que hace referencia a la URL de la imagen del usuario.',
  `role_id` INT NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles1_idx` (`role_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE,
  INDEX `fk_users_locations1_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`role_id`)
    REFERENCES `teacher_app_db`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_locations1`
    FOREIGN KEY (`location_id`)
    REFERENCES `teacher_app_db`.`locations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`teachers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`teachers` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`teachers` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT 'id: campo que representa el id único del profesor\n',
  `experience` INT NOT NULL COMMENT 'experience: campo que indica los años de experiencia del profesor',
  `subjects` MEDIUMTEXT NOT NULL COMMENT 'subjects: campo que indica las materias que imparte dicho profesor',
  `price_hour` DECIMAL(10,2) NOT NULL COMMENT 'price_hour: campo que indica el precio/hora del profesor.',
  `about_me` MEDIUMTEXT NOT NULL COMMENT 'about_me: campo que hace énfasis en una breve descripción del profesor.',
  `department_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_teachers_departments_idx` (`department_id` ASC) VISIBLE,
  INDEX `fk_teachers_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_teachers_departments`
    FOREIGN KEY (`department_id`)
    REFERENCES `teacher_app_db`.`departments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_teachers_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teacher_app_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`ratings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`ratings` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`ratings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rating` INT NOT NULL COMMENT 'rating: campo que va a contener el numero dado de puntuación en un rango entre 0 y 5.',
  `comment` MEDIUMTEXT NOT NULL COMMENT 'comment: campo que va a contener el comentario asociado a la puntuación.',
  `creation_date` DATETIME NOT NULL DEFAULT Now() COMMENT 'creation_date: campo destinado a contener la fecha de creación del rating del comment con la formula (Now()).',
  `provider` VARCHAR(20) NOT NULL COMMENT 'provider: campo que hace referencia a si es un estudiante o el teacher el que genera dicha puntuación y comentario',
  `teacher_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ratings_teachers1_idx` (`teacher_id` ASC) VISIBLE,
  INDEX `fk_ratings_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_ratings_teachers1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `teacher_app_db`.`teachers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ratings_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `teacher_app_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `teacher_app_db`.`class_hours`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teacher_app_db`.`class_hours` ;

CREATE TABLE IF NOT EXISTS `teacher_app_db`.`class_hours` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day_of_week` VARCHAR(20) NOT NULL COMMENT 'Campo que va a contener el día de la semana del horario indicado. “Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”',
  `start_time` TIME NOT NULL COMMENT 'start_time: horario de inicio de las clases',
  `end_time` TIME NOT NULL COMMENT 'end_time: campo que indica el horario de finalización de las clases.',
  `slot` VARCHAR(20) NOT NULL COMMENT 'slot: campo que indica el slot horario de las clases “mañana”, “tarde”, “noche”.',
  `teacher_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_class_hours_teachers1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_class_hours_teachers1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `teacher_app_db`.`teachers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
