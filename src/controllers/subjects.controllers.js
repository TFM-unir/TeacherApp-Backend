const SubjectModel = require('../models/subject.model');

const getAllSubjects = async (req, res) => {
    /**#swagger.tags = ['Subjects']
       #swagger.description = 'Endpoint to get all Subjects.'
    */
    try {
        const [result] = await SubjectModel.selectAllSubjects();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllSubjectsByTeacherId = async (req, res) => {
    /**#swagger.tags = ['Subjects']
       #swagger.description = 'Endpoint to get all Subjects by teacher id.'
    */
    try {
        const { teacherId } = req.params;
        const [subject] = await SubjectModel.selectAllSubjectsByTeacherId(teacherId);
        res.json(subject);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const createSubject = async (req, res) => {
    // #swagger.tags = ['Subjects']
    // #swagger.description = 'Endpoint to create a Subject.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Subject information.',
            required: true,
            schema: { $ref: "#/definitions/Subjects" }
    } */
    try {
        /* const errors = [];
        await Promise.all(
            req.body.subjectForm.map(async function (subject) {
                try {
                    await SubjectModel.insertSubject(subject);
                } catch (error) {
                    errors.push(error.message);
                }
            })
        );

        if (errors.length > 0) {
            res.json("no todas las materias se insertaron correctamente");
        } else {
            res.json("todas las materias insertadas correctamente");
        } */
        const { subject, teacher_id, department_id } = req.body;
        const [result] = await SubjectModel.insertSubject(subject, teacher_id, department_id);
        const [subjectObj] = await SubjectModel.selectSubjectById(result.insertId);
        res.json(subjectObj);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getSubjectById = async (req, res) => {
    /**#swagger.tags = ['Subjects']
       #swagger.description = 'Endpoint to get a Subject.'
    */
    try {
        const { subjectId } = req.params;

        const [subject] = await SubjectModel.selectSubjectById(subjectId);
        res.json(subject[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const updateSubject = async (req, res) => {
    // #swagger.tags = ['Subjects']
    // #swagger.description = 'Endpoint to update a Subject.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Subject information.',
            required: true,
            schema: { $ref: "#/definitions/Subjects" }
    } */
    try {
        const { subjectId } = req.params;
        const [result] = await SubjectModel.updateSubjectById(subjectId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Subject does not change ');
        } else {
            res.status(200).send("Subject modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deleteSubject = async (req, res) => {
    /**#swagger.tags = ['Subjects']
       #swagger.description = 'Endpoint to delete a Subject.'
    */
    try {
        const { subjectId } = req.params;
        const [result] = await SubjectModel.deleteSubjectById(subjectId);

        if (result.affectedRows == 0) {
            res.status(404).send('Subject not found');
        } else {
            res.status(200).send("Subject deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: "Error deleting subject. Try later" });
    }
}

module.exports = { getAllSubjects, createSubject, getSubjectById, getAllSubjectsByTeacherId, deleteSubject, updateSubject }