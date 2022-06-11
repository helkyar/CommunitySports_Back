const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// Sports ___________________________________________
router.use("/utility", require('./utility'));

// JWT middleware auth ______________________________
router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/template", require("./template"));

module.exports = router;
