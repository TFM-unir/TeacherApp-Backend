### Como utilizar Register y Login

## Register

# Modelo 1

 - Inicialmente la petición se debe gestionar de la siguient manera:
  * Json content:
  {
  "userForm":{
    "name": "Juana Alvarez", 
    "nickname": "juasdn123", 
    "email": "pedpedasd@gmail.com", 
    "phone": "642364334548", 
    "password": "12345", 
    "date_of_birth": "1993-02-15", 
    "status": 2, 
    "role_id": 1, 
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
  },
   "teacherSwitch": true
};

Se debe gestionar desde el Front lo siguiente, para que funcione el sistema de autentificación los datos del único formulario completo de registro debe de contener los datos expluestos anteriormente:

- Todos los datos referentes al Usuario deben estar dentro de la clave userForm y se deben de proporcionar todos los datos visibles dentro de la clave.
- Todos los datos referentes al Teacher deben estar dentro de la clave teacherForm y se deben de proporcionar todos los datos visibles dentro de la clave. (si fuese el caso de querer registrarse como teachers).
- Todos los datos referentes a la localización, deben estar dentro de la clave locationForm y se deben de proporcionar todos los datos visibles dentro de la clave.
* La clave teacherSwitch es el valor booleano que representa ese deseo del usuario de registrarse como un teacher o un student. EL valor puede ser true/false o 0/1 (he generado el codigo para que funcione de ambas manera lo que mejor les parezca y lo que nos haga mas facil la vida).

- Si se ha hecho un Registro efectivo, se van a gestionar 3 respuestas diferentes:

* Respuesta con teacher

{
  "user": {
    "id": 32,
    "name": "Juana Alvarez",
    "nickname": "juasdn123",
    "email": "pedpedasd@gmail.com",
    "phone": "642364334548",
    "date_of_birth": "1993-02-15",
    "status": 2,
    "photo": "url",
    "role_id": 1,
    "location_id": 55
  },
  "teacher": {
    "id": 12,
    "experience": 5,
    "class_mode": "Mañana",
    "price_hour": "10.50",
    "about_me": "Soy un soñador brutal con todos los hierros",
    "user_id": 32
  },
  "location": {
    "id": 55,
    "latitude": 41.385063,
    "longitude": 2.987456,
    "address": "calle de quintal 25",
    "city": "Santiago",
    "province": "A Coruña"
  }
}

* Respuesta cuando solo es student:

{
  "user": {
    "id": 32,
    "name": "Juana Alvarez",
    "nickname": "juasdn123",
    "email": "pedpedasd@gmail.com",
    "phone": "642364334548",
    "date_of_birth": "1993-02-15",
    "status": 2,
    "photo": "url",
    "role_id": 1,
    "location_id": 55
  },
  "location": {
    "id": 55,
    "latitude": 41.385063,
    "longitude": 2.987456,
    "address": "calle de quintal 25",
    "city": "Santiago",
    "province": "A Coruña"
  }
}

* Respuesta cuando hay algún error:
{fatal: "el error correspondiente a cada caso según la BD"}

## Login

Para el login se deben proporcionar los siguientes datos:
* Json content:
{
  "email": "rub@gmail.com",
  "password": "12345"
}

Donde el email representa el email del usuario y el password la clave que se ha colocado en el registro del mismo.

- Respuestas posibles:
* Si todo va bien: Se va a devolver un token en formato Json que posee todos los datos del usuario excepto las cosas que puedan generar alguna vulnerabilidad sobre el o tema de protección de datos.

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJ1c2VyX25hbWUiOiJydWJlbiBBbHZhcmV6IiwidXNlcl9lbWFpbCI6InJ1YkBnbWFpbC5jb20iLCJ1c2VyX2JpcnRoZGF5IjoiMTk5My0wMi0xNSIsInVzZXJfcm9sZSI6MSwidXNlcl9zdGF0dXMiOjIsInVzZXJfbG9jYXRpb24iOjM5LCJ1c2VyX2NyZWF0aW9uX2RhdGUiOiIyMDIzLTExLTI1IDEyOjUwOjU1IiwidXNlcl91cGRhdGVfZGF0ZSI6IjIwMjMtMTEtMjUgMTI6NTA6NTUiLCJleHAiOjE3MDE0NTA2NjIsImlhdCI6MTcwMTAxODY2Mn0.OE3y3zQLDq5E5MhtlAaT0qNvCOkWkTZ_kfLbkp8DIr4"
}

* Si todo va mal: se genera un mensaje de error:
{fatal: "Error en email y/o contraseña"}


# Middlewares de autentication

Para la prueba del middleware, se necesita entender como se encuentra conformada esta autentificación y que es lo que hace.

- Este middleware lo que hace es comprobar que en las rutas que sean privadas, se encuentra logueado el usuario y de forma correcta, que no posea un token caducado y que no se haya modificado con respecto al utilizado y codificado metiante la librería.

- A su vez, este middleware inyecta en el req que se envia desde el front una clave user se puede encontrar toda esta información viajando desde el inicio del req hasta el final (recibiendolo en el model y controller) donde podremos encontrar toda la información del usuario loggeado en "req.user".

* La información que pasa el middleware es la siguiente:

{
  id: 6,
  name: 'ruben Alvarez',
  nickname: 'rub123',
  email: 'rub@gmail.com',
  phone: '642364548',
  date_of_birth: '1993-02-15',
  status: 2,
  photo: 'url',
  role_id: 1,
  location_id: 39,
  latitude: 40.45578,
  longitude: 2.45578,
  address: 'juana de arcos 43',
  city: 'Coruña',
  province: 'Coruña'
}
