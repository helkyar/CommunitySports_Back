const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const handleError = require("./middlewares/handleError");
require("dotenv").config();
require('./connections/db/createDB')();


const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(require("express").json());

app.use("/", require("./routes"));
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
