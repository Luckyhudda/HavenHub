const User = require("../model/userModel");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

const catchError = require("../utlis/error");

const authControler = {
  signup: async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await User.find({ email });

    if (user.length > 0) {
      return next(catchError(409, "User already exists"));
    }
    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({
        status: "success",
        message: "User created successfully!",
        newUser,
      });
    } catch (error) {
      next(error);
    }
  },
  Signin: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return next(catchError(404, "User not found!"));
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) return next(catchError(401, "Wrong credentials!"));
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res.header("Authorization", `Bearer ${token}`).status(200).json(rest);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControler;
