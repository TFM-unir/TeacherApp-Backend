const selectAllLocations = () => {
    return db.query('SELECT * FROM locations');
};

const selectLocationById = (id) => {
    return db.query('SELECT * FROM locations WHERE id = ?', [id]);
}

const insertLocation = ({ latitude, longitude, address, city, province }) => {
    return db.query('INSERT INTO locations (latitude, longitude, address, city, province) VALUES (?, ?, ?, ?, ?)', [latitude, longitude, address, city, province]);
};

const updateLocationById = (id, { latitude, longitude, address, city, province }) => {
    return db.query('UPDATE locations SET latitude= ?, longitude= ?, address= ?, city= ?, province= ? WHERE id = ?', [latitude, longitude, address, city, province, id]);
};

const deleteLocationById = (id) => {
    return db.query('DELETE FROM locations WHERE id = ?', [id]);
};


module.exports = { selectAllLocations, deleteLocationById, insertLocation, updateLocationById, selectLocationById }