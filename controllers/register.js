const User = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname,lastname, password, email } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) res.status(400).json({ message: " you have an account " });
    const cryptPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ firstname,lastname, password: cryptPassword, email });

    const user = await newUser.save();

    const token = jwt.sign({ email:email, id: user._id }, "MyApp", {
      expiresIn: "2h",
    });

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
