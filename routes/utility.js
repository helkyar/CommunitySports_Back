const router = require("express").Router();

router.get('/poblate-db', require('../controllers/utility/poblateDB'))

module.exports = router;
