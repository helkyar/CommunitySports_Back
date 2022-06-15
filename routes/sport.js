const router = require("express").Router();

router.get('/all-sports', require('../controllers/sport/getAllSports'))


module.exports = router;