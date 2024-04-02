const User = require("../models/user");
const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log("user controller here ------------");
    const { username, password } = req.body;
    console.log(username, password);
    const newUser = await User.create({ username, password });
    req.user = newUser;
    console.log(`new user ${req.user}`);
    return next();
  } catch (err) {
    return next({
      log: `userController.createUser error ${err}`,
      message: `{err.message}`,
    });
  }
};

userController.getUser = async (req, res, next) => {
  try {
    console.log("before getuser");
    const users = await User.find({}).exec();
    console.log("after getuser");
    res.locals.users = users;
    return next();
  } catch (err) {
    next({
      log: `Middleware getUser error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

module.exports = userController;
