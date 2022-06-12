const router = require("express").Router();

router.get("/event/:userid", require("../controllers/user/getUserEvents"));

module.exports = router;
