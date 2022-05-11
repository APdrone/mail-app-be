const User = require("../model/usermodel");

exports.signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password, passwordConfirm } = req.body;
    // console.log(firstname, lastname, email, password, passwordConfirm);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      passwordConfirm,
    });
    res.status(200).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      msg: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: "failure",
        msg: "Please enter correct email/password",
      });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.verifyPassword(password, user.password))) {
      return res.status(401).json({
        status: "failure",
        msg: "Please provide correct email/password ",
      });
    }

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      msg: "Please provide correct email/password",
    });
  }
};
