# Trabajo fin de Master - TeacherApp FrontEnd

## Autores

- [Ruben](https://github.com/RubenHernandezL)
- [Mairi Tikk](https://github.com/mairitikk)
- [Javier](https://github.com/ValenVier)
- [Miquel Mayordomo Bofill](https://github.com/miquelmb)

## Install

Clonar el repositorio y ejecutar dentro de la carpeta clonada:

    $ npm install

## Base de Datos

La BD se diseño con MySQL Workbench y se encuentra en la carpeta db/

El diseño se puede ver en el siguiente enlace de Excalidraw:

https://excalidraw.com/#room=49b16890a97c59c237f3,d8ReKXXQ0H-9cGcHwOAI4A

## API

La lista de APIs se define usando [Swagger](https://swagger.io/tools/swagger-ui/), y se encuentran en la siguiente URL:

http://localhost:3000/api/docs/#/

Swagger funciona con el fichero `swagger.json` que contiene todas las anotaciones de las APIs.

El fichero `swagger.json` lo generamos con el comando:

      node src/swagger.js

Las anotaciones se deben colocar en cada una de las funciones de los controllers. Por ejemplo, para la funcion `deleteDepartment` del controller `departments.controllers.js`:

    const deleteDepartment = async (req, res) => {
            // #swagger.tags = ['Departments']
            // #swagger.description = 'Endpoint to get a Department.'
            ....
    }

Para una detallada descripción de las anotaciones, se recomienda ver la documentación de [Swagger](https://swagger-autogen.github.io/docs/endpoints/property-inheritance)
