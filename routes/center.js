const router = require("express").Router();

router.get("/allcenters", require("../controllers/center/getAllCenters"));



module.exports = router;