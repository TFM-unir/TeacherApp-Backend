const router = require('express').Router();

// Peticiones GET
router.get('/', (req, res) => {res.json({ message: 'works'})});

//Peticiones POST

module.exports = router;