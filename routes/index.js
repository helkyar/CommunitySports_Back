const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// Sports ___________________________________________
router.use("/utility", require('./utility'));

// JWT middleware auth ______________________________
// router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/template", require("./template"));
router.use("/event", require("./event"));
router.use("/user", require("./user"));
router.use("/center", require("./center"))
router.use("/sport", require("./sport"))

module.exports = router;
