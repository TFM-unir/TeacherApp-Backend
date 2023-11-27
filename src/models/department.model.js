const selectAllDepartments = () => {
    return db.query('SELECT * FROM departments');
};

const selectDepartmentById = (id) => {
    return db.query('SELECT * FROM departments WHERE id = ?', [id]);
};



const insertDepartment = ({ department_name, description }) => {
    return db.query('INSERT INTO departments (department_name, description) VALUES (?, ?)', [department_name, description]);
};

const updateDepartmentById = (id, { department_name, description }) => {
    return db.query('UPDATE departments SET department_name = ?, description = ? WHERE id = ?', [department_name, description, id]);
};

const deleteDepartmentById = (id) => {
    return db.query('DELETE FROM departments WHERE id = ?', [id]);
};


module.exports = { selectAllDepartments, deleteDepartmentById, insertDepartment, updateDepartmentById, selectDepartmentById }