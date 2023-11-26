//Importamos el model de users
const UsersModel = require('../models/user.model');
const LocationModel = require('../models/location.model');
//Importamos la librería para encriptar la clave
const bcrypt = require("bcryptjs");
// Importamos el modulo del token
const { createToken } = require('../helpers/utils');
const jsonwebtoken = require('jsonwebtoken');
//importamos el teacher model para ser utilizado
const TeacherModel = require('../models/teacher.model');

//TODO: Este es el modelo 1 de register con todos los datos
const register = async (req, res) => {
    try {
        //En este primer modelo los 3 formularios son enviados y debe de generarse en front el envío de todos como un objeto en  donde coloquemos los datos del user en userForm, los datos del teacher en teacherForm y los datos de location el locationForm
        //primero se encripta la password
        req.body.userForm.password = bcrypt.hashSync(req.body.userForm.password, 10);
        const [resultUser] = await UsersModel.insertUser(req.body.userForm);
        const [user] = await UsersModel.selectUserByIdWhithOutLocation(resultUser.insertId);
        //Dejo el condicional par poder utilizarlo en caso que se decida seguir con el modelo 1
        if (req.body.teacherSwitch !== 1 && req.body.teacherSwitch !== true) {
            // await UsersModel.updateUserLocationId(resultLocation.insertId, user[0].id);

            const [userLocation] = await LocationModel.selectLocationByUserId(user[0].id);
            const [updatedUser] = await UsersModel.selectUserByIdWhithOutLocation(user[0].id);
            return res.json({
                user: updatedUser[0],
                location: userLocation[0]
            });
        };
        //Este codigo lo dejo en el hipotetico caso que queramos seguir con lo del teacher en el modleo 1
        req.body.teacherForm.user_id = user[0].id;
        const [resulTeacher] = await TeacherModel.insertTeacher(req.body.teacherForm);
        const [teacher] = await TeacherModel.selectTeacherOnlyTableById(resulTeacher.insertId);
        console.log(teacher);

        await UsersModel.updateUserLocationId(resultLocation.insertId, user[0].id);
        const [userLocation] = await LocationModel.selectLocationByUserId(user[0].id);
        const [updatedUser] = await UsersModel.selectUserByIdWhithOutLocation(user[0].id);
        res.json({
            user: updatedUser[0],
            teacher: teacher[0],
            location: userLocation[0]
        });

    } catch (error) {
        return res.json({ fatal: error.message });
    };
};

//TODO: Este sería el modleo 2 de Register
// const register = async (req, res) => {
//     try {
//         //primero encriptamos la password
//         req.body.password = bcrypt.hashSync(req.body.password, 10);
//         const [result] = await UsersModel.insertUser(req.body);
//         const [user] = await UsersModel.selectUserByIdWhithOutLocation(result.insertId);
//         res.json(user[0]);
//     } catch (error) {
//         res.json({ fatal: error.message })
//     }
// };

//Elaboramos el login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //hay que hacer el find par abuscar en la bd el email ¿Tenemos el email en la base de datos?
        const [user] = await db.query('SELECT * FROM teacher_app_db.users WHERE email = ?', [email]);

        if (user.length === 0) {
            return res.json({ fatal: 'Error en email y/o password' })
        };

        // ¿Coincide la password con la de la BD?
        const equals = bcrypt.compareSync(password, user[0].password);
        if (!equals) {
            return res.json({ fatal: "Error en email y/o contraseña" });
        };

        //aquí tendríamos que redirigir a alguna pag queya no sea libre
        res.json({
            token: createToken(user[0])
        });
    } catch (error) {
        res.json({ fatal: error.message });
    }

};



//TODO: Este es el modelo 2 el que me parece mejor utilizar
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
        const [userLocation] = await LocationModel.selectLocationByUserId(tokenUncode.user_id);
        res.json(userLocation[0]);

        res.json(userLocation[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = { register, login, location }