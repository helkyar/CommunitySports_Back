const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// JWT middleware auth ______________________________
// router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/template", require("./template"));
router.use("/event", require("./event"));
router.use("/user", require("./user"));

module.exports = router;
