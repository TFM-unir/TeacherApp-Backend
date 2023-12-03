//importamos libreria de jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');

//importamos el user model
const UsersModel = require('../models/user.model');

//importamos el teacher Model
const TeacherModel = require('../models/teacher.model');

// tenemos que hacer comprobaciones del token
const checkToken = async (req, res, next) => {
    
    //Comprobar si viene incluido el token en la cabecera
    if (!req.headers.authorization) {
        return res.status(403).json({ fatal: 'Necesitas la cabecera de autenticación' })
    }
    
    const token = req.headers.authorization;

    //Comprobar si el Token es válido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(403).json({ fatal: error.message });
    }

    //Recuperar el usuario que reliza la petición
    const [user] = await UsersModel.selectUserById(payload.user_id);

    //Se genera un condicional para pasar las características de un teacher dentro del usuario y de esta manera tener esos datos disponibles en todos los ambitos tras login
    if (user.role_id === 2) {
        const [teacher] = await TeacherModel.selectTeacherByUserId(user[0].id);
        req.user = user[0];
        req.user.teacher = teacher[0];
        next();
    } else {
        req.user = user[0];
        next();
    };
}
module.exports = { checkToken };