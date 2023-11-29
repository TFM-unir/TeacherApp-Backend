//Importamos el model de Class
const ClassHoursModel = require('../models/class.hour.model');

// Se utiliza para obtener todas las clases
const getAllClass = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.selectAllClass();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza par obtener una clase por si ID
const getClassById = async (req, res) => {
    const { classId } = req.params;
    try {
        const [ClassHour] = await ClassHoursModel.selectClassById(classId);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para ver todas las clases que posee un teacher pr el teacher Id
const getAllClassByTeacherId = async (req, res) => {
    const { teacherId } = req.params;
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherId(teacherId);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

//Se utiliza para ver todas las clases filtradas por slots
const getAllClassBySlot = async (req, res) => {
    try {
        const [ClassHour] = await ClassHoursModel.selectClassBySlot(req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para obtener todas las clases filtradas por día de semana
const getAllClassByDayOfWeek = async (req, res) => {
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByDayOfWeek(req.body.day_of_week);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para obtener todas als clases filtrado por dia de semana y por teacher
const getAllClassByTeacherIdAndDayOfWeek = async (req, res) => {
    const { teacherId } = req.params;
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeek(teacherId, req.body.day_of_week);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para obtener todas las clases filtradas por slot y por teacher
const getAllClassByTeacherIdAndSlot = async (req, res) => {
    const { teacherId } = req.params;
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndSlot(teacherId, req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza obtener todas las clases fintradas por Slots, Por teacher y por día de semana
const getAllClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    const { teacherId } = req.params;
    try {
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeekAndSlot(teacherId, req.body.day_of_week, req.body.slot);
        res.json(ClassHour);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para crear una clase
const createClass = async (req, res) => {
    try {
        req.body.teacher_id = req.user.teacher.id;
        const [result] = await ClassHoursModel.insertClass(req.body);
        const [ClassHour] = await ClassHoursModel.selectClassById(result.insertId);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para actualizar una clase por el id del teacher
const updateClassByTeacherId = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateCLassByTeacherId(req.user.teacher.id, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherId(req.user.teacher.id);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para actualizar una clase por el id del teacher y el día de semana
const updateClassByTeacherIdAndDayOfWeek = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para actualizar una clase por el id del teacher el día de semana y el slot
const updateClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.updateClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot, req.body);
        const [ClassHour] = await ClassHoursModel.selectClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot);
        res.json(ClassHour[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    };
};

// Se utiliza para eliminar una clase por el id de la clase
const deleteClassById = async (req, res) => {
    const { ClassId } = req.params;
    try {
        const [result] = await ClassHoursModel.deleteClassById(ClassId);
        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

// Se utiliza para eliminar una clase por el ID del profesor
const deleteClassByTeacherId = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherId(req.user.teacher.id);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

// Se utiliza para eliminar una clase por el Id del teacher y el dia de semana
const deleteClassByTeacherIdAndDayOfWeek = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherIdAndDayOfWeek(req.user.teacher.id, req.body.day_of_week);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

// Se utiliza para eliminar una clase por el id del teacher, el dia de semana y el slot
const deleteClassByTeacherIdAndDayOfWeekAndSlot = async (req, res) => {
    try {
        const [result] = await ClassHoursModel.deleteClassByTeacherIdAndDayOfWeekAndSlot(req.user.teacher.id, req.body.day_of_week, req.body.slot);

        if (result.affectedRows == 0) {
            res.status(404).send('Location not found');
        } else {
            res.status(200).send("Location deleted successfuly");
        };
    } catch (error) {
        res.json({ fatal: "Error deleting location. Try later" });
    };
};

///Realizamos el controller para el Student

// Se utiliza para obtener todas las clases de un alumno
const getStudentClassByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        // Consulta para encontrar al estudiante en todos los campos id_user
        const [studentSchedule] = await ClassHoursModel.getStudentClassByUserId(userId);
        res.json(studentSchedule[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// Se utiliza para obtener un available slot específico
const findClassAvailableSlot = async (req, res) => {
    try {
        const { teacherId, dayOfWeek, slot } = req.body;
        // Consulta para encontrar un bloque horario disponible con campo id_user vacío
        const [availableSlot] = await ClassHoursModel.findClassAvailableSlot(teacherId, dayOfWeek, slot);
        res.json(availableSlot[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// Se utiliza para darse de alta en una clase utilizando  como parametros el userID, el teacher Id, el slot y el dia de semana para ser muy específico
const UpdateClassByStudentIdAndClassId = async (req, res) => {
    const { userId } = req.params;
    const { teacherId, dayOfWeek, slot } = req.body;
    try {
        // Buscar un bloque horario con campo id_user vacío
        const [availableClass] = await ClassHoursModel.findClassAvailableSlot(teacherId, dayOfWeek, slot);

        // Actualizar el campo id_user vacío con el ID del estudiante para eso un condicional
        if (availableSlot) {
            // Si se encontró un bloque horario disponible, inscribir al estudiante
            const [updatedClass] = await ClassHoursModel.UpdateClassByStudentIdAndClassId(userId, availableClass[0].id);
            const [studentSchedule] = await ClassHoursModel.getStudentClassByUserId(userId);
            res.json(studentSchedule[0]);
        } else {
            // Si no hay bloques horarios disponibles, enviar un mensaje
            res.json({ message: 'No hay cupo para inscribirse en el bloque horario seleccionado.' });
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// Dar debaja todas las clases del usuario utilizando su user ID
const withdrawAllStudentClassByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const [result] = await ClassHoursModel.withdrawAllStudentClassByUserId(userId);
        res.status(200).send("Estudiante retirado de todas las clases exitosamente");
    } catch (error) {
        res.json({ fatal: "Error al retirar al estudiante de todas las clases. Intente nuevamente más tarde." });
    }
};

// Dar de baja las clases de un usuario utilizando el id del usuario y el id de la clase
const withdrawClassSlotByStudentIdAndClassId = async (req, res) => {
    const { userId, classId } = req.params;
    try {
        await ClassHoursModel.withdrawClassSlotByStudentIdAndClassId(userId, classId);
        const [result] = res.status(200).send("Estudiante retirado del bloque horario exitosamente");
    } catch (error) {
        res.json({ fatal: "Error al retirar al estudiante del bloque horario. Intente nuevamente más tarde." });
    }
};

// Dar de baja todas las clases que un usuario tenga con un profesor específico utilizando el teacher id y el usuario id
const withdrawStudentFromTeacherClass = async (req, res) => {
    const { teacherId, userId } = req.params;
    try {
        await ClassHoursModel.withdrawStudentFromTeacherClass(teacherId, userId);
        const [result] = res.status(200).send("Estudiante retirado de todas las clases del profesor exitosamente");
    } catch (error) {
        res.json({ fatal: "Error al retirar al estudiante de las clases del profesor. Intente nuevamente más tarde." });
    }
};


module.exports = {
    getAllClass,
    getClassById,
    getAllClassByTeacherId,
    getAllClassBySlot,
    getAllClassByDayOfWeek,
    getAllClassByTeacherIdAndDayOfWeek,
    getAllClassByTeacherIdAndSlot,
    getAllClassByTeacherIdAndDayOfWeekAndSlot,
    createClass,
    updateClassByTeacherId,
    updateClassByTeacherIdAndDayOfWeek,
    updateClassByTeacherIdAndDayOfWeekAndSlot,
    deleteClassById,
    deleteClassByTeacherId,
    deleteClassByTeacherIdAndDayOfWeek,
    deleteClassByTeacherIdAndDayOfWeekAndSlot,
    getStudentClassByUserId,
    findClassAvailableSlot,
    UpdateClassByStudentIdAndClassId,
    withdrawAllStudentClassByUserId,
    withdrawClassSlotByStudentIdAndClassId,
    withdrawStudentFromTeacherClass
};