//importamos libreria de jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');

// tenemos que hacer comprobaciones del token
const checkToken = async (req, res, next) => {

    //Comprobar si viene incluido el token en la cabecera
    if (!req.headers['authorization']) {
        return res.status(403).json({ fatal: 'Necesitas la cabecera de autenticación' })
    }

    const token = req.headers['authorization'];

    //Comprobar si el Token es válido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(403).json({ fatal: error.message });
    }

    //Recuperar el usuario que reliza la petición
    const [user] = await db.query('SELECT u.name, u.nickname, u.email, u.phone, DATE_FORMAT(u.date_of_birth, "%Y-%m-%d") as date_of_birth, u.status, u.photo FROM users as u where u.id=?', [payload.user_id]);
    req.user = user;
    next();
};

module.exports = { checkToken };