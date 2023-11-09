const { default: User } = require("../model/userModel");
const catchError = require("../utlis/error");

const authControler = {
  signup: async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await User.find({email});

    if(user)  return next(catchError(402, "User already Exist"));

    const hashedPassword = bcryptjs.hashSync(password, 12);
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
