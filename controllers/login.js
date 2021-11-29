const User = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const {  password, email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) res.status(400).json({ message: "wrong email " });

    const validatepassword =bcrypt.compare(password, user.password);
    if (!validatepassword) res.status(400).json({message:"wrong password"});

    const token = jwt.sign({ email:email, id: user._id }, "MyApp", {
      expiresIn: "2h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
