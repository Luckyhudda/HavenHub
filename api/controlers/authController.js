const  User  = require("../model/userModel");
const bcrypt = require("bcrypt");

const catchError = require("../utlis/error");

const authControler = {
  signup: async (req, res,next) => {
    const { username, email, password } = req.body;

    const user = await User.find({email});

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
        newUser
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControler;
