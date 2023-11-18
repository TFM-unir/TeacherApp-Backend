//Importamos la libreria de dayjs
const dayjs = require('dayjs');
// Importamos la libreria jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');
// Creamos la estructura del token
const createToken = (user) => {
    const payload = {
        user_id: user.id,
        user_role: user.role_id,
        exp: dayjs().add(30, 'minutes').unix()
    };
    // Codificamos el token
    return jsonwebtoken.sign(payload, process.env.SECRET_KEY);
};

module.exports = { createToken };