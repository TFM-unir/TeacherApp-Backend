const selectAllLocations = () => {
    return db.query('SELECT * FROM locations');
};

const selectLocationById = (id) => {
    return db.query('SELECT * FROM locations WHERE id = ?', [id]);
};

const selectLocationByUserId = (userId) => {
    return db.query('SELECT l.id, l.latitude, l.longitude, l.address, l.city, l.province FROM teacher_app_db.locations as l JOIN teacher_app_db.users ON users.location_id = l.id WHERE users.id = ?', [userId]);
};

const insertLocation = ({ latitude, longitude, address, city, province }) => {
    return db.query('INSERT INTO locations (latitude, longitude, address, city, province) VALUES (?, ?, ?, ?, ?)', [latitude, longitude, address, city, province]);
};

const updateLocationById = (id, { latitude, longitude, address, city, province }) => {
    return db.query('UPDATE locations SET latitude= ?, longitude= ?, address= ?, city= ?, province= ? WHERE id = ?', [latitude, longitude, address, city, province, id]);
};

const deleteLocationById = (id) => {
    return db.query('DELETE FROM locations WHERE id = ?', [id]);
};

const checkLocation = (latitude, longitude, address, city, province) => {
    return db.query('SELECT * FROM locations WHERE latitude=? and longitude=? and address=? and city=? and province=?', [latitude, longitude, address, city, province]);
};


module.exports = { selectAllLocations, selectLocationByUserId, deleteLocationById, insertLocation, updateLocationById, selectLocationById, checkLocation }