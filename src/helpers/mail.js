var nodemailer = require('nodemailer');

const sendEmail = async (toBcc, messageType) => {
    try {
        //creamos el transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: { ciphers: 'SSLv3' },
        });
        //message
        const message = {
            from: process.env.EMAIL,
            to: toBcc,
            //bcc: toBcc,
            subject: checkTitle(messageType),
            html: checkBody(messageType),
        };
        //enviar el message
        const info = await transporter.sendMail(message);
        return info;
    } catch (error) {
        throw new Error("Email could not be sent");
    }
}

/* Actualmente sólo se está usando el msA, ya que no se va a implementar la validación de la asignatura */

function checkTitle(messageType) {
    if (messageType === "msA"){
        return "Nuevo profesor registrado en TeacherApp"
    } 
    if (messageType === "msB"){
        return "Nueva asignatura pendiente de validar"
    }
}

function checkBody(messageType) {
    if(messageType === "msA"){
        return "Un nuevo profesor se ha registrado en TeacherApp, pulse en este link para ir al perfil del profesor y validarlo."
    }
    if(messageType === "msB"){
        return "Un profesor quiere añadir una nueva asignatura en TeacherApp, pulse en este link para comprobar que no esté ya en la base de datos y validarla."
    }
}



module.exports = { sendEmail }