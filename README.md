# Trabajo fin de Master - TeacherApp FrontEnd

## Autores

- [Ruben](https://github.com/RubenHernandezL)
- [Miquel Mayordomo Bofill](https://github.com/miquelmb)
- [Javier](https://github.com/ValenVier)
- [Mairi Tikk](https://github.com/mairitikk)

## Base de Datos

La BD se diseño con MySQL Workbench y se encuentra en la carpeta db/

El diseño se puede ver en el siguiente enlace de Excalidraw:

https://excalidraw.com/#room=49b16890a97c59c237f3,d8ReKXXQ0H-9cGcHwOAI4A

## API

Estas son las interfaces de conexion entre el back y el front.

## Register

- Registra un alumno o un profesor:

      POST: http://localhost:3000/api/users/register
        Content-Type: application/json

      {
        "userForm":{
            "name": "Juana Alvarez",
            "nickname": "juasdn123",
            "email": "pedesdasd@gmail.com",
            "phone": "643434548",
            "password": "12345",
            "date_of_birth": "1993-02-15",
            "status": 2,
            "role_id": 2,
            "photo": "url"
        },
        "teacherForm": {
            "experience":5,
            "class_mode": "Mañana",
            "price_hour": 10.50,
            "about_me": "Soy un soñador brutal con todos los hierros"
        },
        "locationForm": {
            "latitude": 41.385063,
            "longitude": 2.987456,
            "address": "calle de quintal 25",
            "city": "Santiago",
            "province": "A Coruña"
        }
      }

### Profesor

- Retorna listado de profesores:

      GET http://localhost:3000/api/teachers/

- Retorna un profesor:

      GET http://localhost:3000/api/teachers/:id

- Registro de profesor (solo para acceder a la tabla teachers)

      POST http://localhost:3000/api/teachers/
      Content-Type: application/json
      {
        "experience" : 5,
        "class_mode" : "ll",
        "price_hour" : 5,
        "about_me" : "afa",
        "user_id" : 3
      }

- Actualiza la información de un profesor:

      PUT http://localhost:3000/api/teachers/:id
      Content-Type: application/json
      {
        "experience" : 5,
        "class_mode" : "ll",
        "price_hour" : 5,
        "about_me" : "afa",
        "user_id" : 3
      }

### Alumnos

- Retorna listado de alumnos:

      GET http://localhost:3000/api/students/

- Retorna un alumno:

      GET http://localhost:3000/api/students/:id

- Actualiza la información de un alumno:

      PUT http://localhost:3000/api/students/:id
      Content-Type: application/json
      {
        "name": "Emilio Alvarez",
        "nickname": "emilio123",
        "email": "em.12356@emil.com",
        "phone": "+34 232345234",
        "password": "12345",
        "date_of_birth": "1989-09-30",
        "status": 2,
        "role_id": 2,
        "location_id": 3,
        "photo": "url"
      }

- Registro de alumno

      POST http://localhost:3000/api/students/
      Content-Type: application/json
      {
        "name": "Emilio Alvarez",
        "nickname": "emilio123",
        "email": "em.12356@emil.com",
        "phone": "+34 232345234",
        "password": "12345",
        "date_of_birth": "1989-09-30",
        "status": 2,
        "role_id": 2,
        "location_id": 3,
        "photo": "url"
      }
