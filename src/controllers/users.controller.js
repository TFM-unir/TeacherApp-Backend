//Importamos el model de users
const UsersModel = require('../models/user.model');
// importamos el location model
const LocationModel = require('../models/location.model');
//importamos el teacher model
const TeacherModel = require('../models/teacher.model');
//Importamos la librería para encriptar la clave
const bcrypt = require("bcryptjs");
// Importamos el modulo del token
const { createToken } = require('../helpers/utils');
const jsonwebtoken = require('jsonwebtoken');

// Modelo 1 de register con todos los datos
// En este primer modelo los 3 formularios son enviados y 
// debe generarse en front el envío de todos como un objeto 
// los datos del user en userForm, 
// los datos del teacher en teacherForm y 
// los datos de location el locationForm
const register = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to register a Users.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Users information.',
            required: true,
            schema: { $ref: "#/definitions/Users" }
    } */
    try {
        //primero se encripta la password
        req.body.userForm.password = bcrypt.hashSync(req.body.userForm.password, 10);

        //insertar primero location porque no depende de ninguna tabla
        const [resultLocation] = await LocationModel.insertLocation(req.body.locationForm);

        // sacamos el contenido de location
        const [location] = await LocationModel.selectLocationById(resultLocation.insertId);

        //tomar id del location y asignarselo al user
        req.body.userForm.location_id = resultLocation.insertId;

        // insertamos el user
        const [resultUser] = await UsersModel.insertUser(req.body.userForm);
        const [user] = await UsersModel.selectUserByIdWhithOutLocation(resultUser.insertId);

        // Elimino el teacherSwitch porque creo que es mejor controlar 
        // el tipo de usuario con el rol, porque puede pasar que 
        // teacherSwitch es teacher pero el rol_id que se recibe es de estudiante
        // y eso seria incorrecto. Tal como lo tienes actualmente en tu ejemplo
        // TODO - checkear el rol con la base de datos y no con el numero 1 (estudiante)
        if (req.body.userForm.role_id === 1) {
            return res.json({
                user: user[0],
                location: location[0]
            });
        };

        // si es un teacher, continuamos
        req.body.teacherForm.user_id = user[0].id;
        const [resulTeacher] = await TeacherModel.insertTeacher(req.body.teacherForm);
        const [teacher] = await TeacherModel.selectTeacherOnlyTableById(resulTeacher.insertId);

        // TODO : Materias

        res.json({
            user: user[0],
            teacher: teacher[0],
            location: location[0]
        });

    } catch (error) {
        return res.json({ fatal: error.message });
    };
};

// TODO: Modelo 2 de Register


//Elaboramos el login
const login = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint to register a Users.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Users information.',
            required: true,
            schema: { $ref: "#/definitions/UsersLogin" }
    } */
    try {
        const { email, password } = req.body;

        //hay que hacer el find para buscar en la bd el email ¿Tenemos el email en la base de datos?
        const [user] = await UsersModel.selectUserByEmail(email);

        if (user.length === 0) {
            return res.json({ fatal: 'Error en email y/o password' })
        };

        // ¿Coincide la password con la de la BD?
        const equals = bcrypt.compareSync(password, user[0].password);
        if (!equals) {
            return res.json({ fatal: "Error en email y/o contraseña" });
        };

        //aquí tendríamos que redirigir a alguna pag que ya no sea libre
        res.json({
            token: createToken(user[0])
        });
    } catch (error) {
        res.json({ fatal: error.message });
    }

};



/*/TODO: Este es el modelo 2 el que me parece mejor utilizar
//Elaboramos la insersión del location
const location = async (req, res) => {
    //se coloca en una constante el token para extraer el ID
    const { token } = JSON.parse(req.headers['authorization']);
    //Decodificamos el Token
    const tokenUncode = jsonwebtoken.decode(token, process.env.SECRET_KEY);
    try {
        //se inserta en la bd los datos indicados del front
        const [result] = await LocationModel.insertLocation(req.body);
        const [resultUpdatedUser] = await UsersModel.updateUserLocationId(result.insertId, tokenUncode.user_id);
        const [location] = await LocationModel.selectLocationByUserId(tokenUncode.user_id);
        res.json(location[0]);

        res.json(location[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
}*/

module.exports = { register, login } // , location }