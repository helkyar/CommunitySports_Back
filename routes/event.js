const router = require("express").Router();

router.get("/:id", require("../controllers/event/getEvent"));
router.get("/user/:id", require("../controllers/event/getUserEvents"));
router.get("/center/:id", require("../controllers/event/getCenterEvents"));
router.get("/allevents", require("../controllers/event/getAllEvents"));
router.post("/add", require("../controllers/event/postEvent"));
router.post("/add/user", require("../controllers/event/postUserEvents"));
router.post("/del/user", require("../controllers/event/delUserEvents"));

// router.get("/all", require("../controllers/template/getAllTemplates"));
// router.patch("/update/:id", require("../controllers/template/patchTemplate"));
// router.delete("/delete/:id", require("../controllers/template/delTemplate"));

module.exports = router;
