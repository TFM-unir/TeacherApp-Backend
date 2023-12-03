const selectAllSubjects = () => {
    return db.query('SELECT * FROM subjects');
};

const selectSubjectById = (id) => {
    return db.query('SELECT * FROM subjects WHERE id = ?', [id]);
};

const selectAllSubjectsByTeacherId = (teacherId) => {
    return db.query('SELECT * FROM subjects WHERE teacher_id = ?', [teacherId]);
};

const insertSubject = (subject, teacher_id, department_id) => {
    return db.query('INSERT INTO subjects (subject, teacher_id, department_id) VALUES (?, ?, ?)', [subject, teacher_id, department_id]);
};

const updateSubjectById = (id, { subject, teacher_id, department_id }) => {
    return db.query('UPDATE subjects SET subject = ?, teacher_id = ?, department_id = ? WHERE id = ?', [subject, teacher_id, department_id, id]);
};

const deleteSubjectById = (id) => {
    return db.query('DELETE FROM subjects WHERE id = ?', [id]);
};


module.exports = { selectAllSubjects, selectAllSubjectsByTeacherId, deleteSubjectById, insertSubject, updateSubjectById, selectSubjectById }