const router = require("express").Router();

router.get("/allcenters", require("../controllers/center/getAllCenters"));
router.get("/centersWithSports", require("../controllers/center/getCentersWithSports"))


module.exports = router;