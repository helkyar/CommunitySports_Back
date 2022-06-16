const jwt = require("jsonwebtoken");
const selectUser = require("../../connections/service/user/selectUser");

async function checkLogin(req, res, next) {
  try {
    console.log("Login controller");
    const credentials = req.body;

    // Incorrect login___________________________________
    if (!credentials) {
      res.status(400).json({ error: "nice try" });
    }

    // Search user_______________________________________
    const { id, email } = await selectUser(credentials);

    if (!user) {
      return res.status(400).json({ error: "credenciales incorrectas" });
    }

    // Create token________________________________________
    const token = jwt.sign({ id, username }, process.env.TOKEN_SECRET);

    res.status(200).json({ token, email, id });
  } catch (err) {
    next(err);
  }
}

module.exports = checkLogin;
