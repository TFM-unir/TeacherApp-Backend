//importamos libreria de jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');

//importamos el user model
const UsersModel = require('../models/user.model');

// tenemos que hacer comprobaciones del token
const checkToken = async (req, res, next) => {

    //Comprobar si viene incluido el token en la cabecera
    if (!req.headers['authorization']) {
        return res.status(403).json({ fatal: 'Necesitas la cabecera de autenticación' })
    }

    const { token } = JSON.parse(req.headers['authorization']);

    //Comprobar si el Token es válido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(403).json({ fatal: error.message });
    }

    //Recuperar el usuario que reliza la petición
    const [user] = await UsersModel.selectUserById(payload.user_id);
    req.user = user[0];
    next();
};

module.exports = { checkToken };