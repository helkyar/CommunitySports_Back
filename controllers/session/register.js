const bcrypt = require("bcrypt");
const insertUser = require('../../connections/service/user/insertUser');
const getAge = require("../../utility/getAge");
const jwt = require("jsonwebtoken");
const { v4 } = require('uuid')

async function register(req, res, next) {
  try {
    console.log("Register controller");
    let data = req.body;
    //(!) Validation
    const salt = await bcrypt.genSalt(10);
    data.id = v4();
    data.password = await bcrypt.hash(data.password, salt);
    data.subscriber = 0;
    data.age = getAge(data.age)
    console.log(data);
    const user = await insertUser(data);
    console.log(user);
    //(!) Universal manager -> model response
    const token = jwt.sign({ id: data.id, username: data.username }, process.env.TOKEN_SECRET);
    user !== null
      ? res.status(200).json({ token: token, id: data.id, email: data.email })
      : res.status(400).json({ error: "Wrong format" });
  } catch (err) {
    next(err)
  }
}

module.exports = register;
