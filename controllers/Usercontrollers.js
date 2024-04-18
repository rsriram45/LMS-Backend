const User = require("../models/Usermodels.js");
const bcrypt = require("bcrypt");
const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ Message: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashpassword,
    });
    await createUser.save();
    res.status(200).json({ message: "User created sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatched = await bcrypt.compare(password, user.password);
    if (!user || !isMatched) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    } else {
      res.status(200).json({
        message: "Login successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};
module.exports = { Signup, Login };
