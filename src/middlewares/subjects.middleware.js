const SubjectsModel = require('../models/subject.model');

const checkSubjectTeacher = async (req, res, next) => {
    const { subject, teacher_id, department_id } = req.body;
    try {
        const [subjectObj] = await SubjectsModel.selectAllSubjectsByTeacherId(teacher_id);
        console.log(subjectObj)
        if (subjectObj.length === 0) {
            next();
        } else {
            res.json({ message: 'Solo se puede dar un asignatura por profesor. Para poder dar más de una asignatura deberá ser premium o esperar a la versión 2.x de la aplicación.' })
            return;
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkSubjectTeacher }