const selectAllCenters = require('../../connections/service/center/selectAllCenters');



async function getAllCenters(req, res) {

  //(!) Validation
  const data = await selectAllCenters();
  
  data !== null
    ? res.status(200).json(data)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getAllCenters;
