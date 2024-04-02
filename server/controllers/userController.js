const User = require("../models/user");
const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('user controller here ------------')
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

module.exports = userController;