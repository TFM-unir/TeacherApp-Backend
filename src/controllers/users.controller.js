//Importamos el model de users
const UsersModel = require('../models/user.model');
const LocationModel = require('../models/location.model');
//Importamos la librería para encriptar la clave
const bcrypt = require("bcryptjs");
// Importamos el modulo del token
const { createToken } = require('../helpers/utils');
const jsonwebtoken = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        //primero encriptamos la password
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const [result] = await UsersModel.insertUser(req.body);
        const [user] = await UsersModel.selectUserByIdWhithOutLocation(result.insertId);
        res.json(user[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


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
            success: "Login Correcto",
            token: createToken(user)
        });
    } catch (error) {
        res.json({ fatal: error.message });
    }

};



//TODO: construir despues de recibir el Token, que tengamos el id del usuario es que podremos meter los datos de location como pag 2
const location = async (req, res) => {
    //se coloca en una constante el token para extraer el ID
    const token = req.headers['authorization'];
    //Decodificamos el Token
    const tokenUncode = jsonwebtoken.decode(token, process.env.SECRET_KEY);

    try {
        //se inserta en la bd los datos indicados del front
        const [result] = await LocationModel.insertLocation(req.body);
        const [userLocation] = await LocationModel.selectLocationById(result.insertId);

        // deberiamos actualizar id_location (result.insertId) en el usuario con tokenUncode.user_id ?

        res.json(userLocation[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = { register, login, location }