// Requerimos el modelo para las comprobaciones en las bases de datos.
const StudentsModel = require('../models/student.model');
// El primer validador sería chequear si ese alumno existe antes de realizar un get, un push o un delete a través del id.
const checkStudentById = async (req, res, next) => {
    //primero nos traemos el id del user
    const { studentId } = req.params;
    try {
        //buscamos el estudiante por su id
        const [student] = await StudentsModel.selectStudentById(studentId);
        // Generamos el condicional para la respuesta del validador
        if (!student) {
            return res.json({ message: 'El estudiante no existe' });
        } else {
            next();
        };
    } catch (error) {
        res.json({ fatal: error.message });
    };
};



module.exports = { checkStudentById };

