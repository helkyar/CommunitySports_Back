const router = require("express").Router();

router.get("/search", require("../controllers/event/getEvents"));
router.get("/user/:id", require("../controllers/event/getUserEvents"));
router.get("/center/:id", require("../controllers/event/getCenterEvents"));
router.get("/allevents", require("../controllers/event/getAllEvents"));
router.post("/add", require("../controllers/event/postEvent"));

// router.get("/all", require("../controllers/template/getAllTemplates"));
// router.patch("/update/:id", require("../controllers/template/patchTemplate"));
// router.delete("/delete/:id", require("../controllers/template/delTemplate"));

module.exports = router;
