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

// userController.getUser = async (req, res, next) => {
//   try {
//     console.log("before getuser");
//     const users = await User.find({}).exec();
//     console.log("after getuser");
//     res.locals.users = users;
//     return next();
//   } catch (err) {
//     next({
//       log: `Middleware getUser error ${err}`,
//       status: 500,
//       message: { err: `An error in middleware occured` },
//     });
//   }
// };

userController.verifyUser = async (req, res, next) => {
  try {
    console.log("before verify");
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(`${username} ${user.username} ${password} ${user.password}`);
    req.user = user;
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    if (password !== user.password) {
      return res.status(400).json({ error: "Incorrect password" });
    }
    return next();
  } catch (err) {
    next({
      log: `Middleware verifyUser error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

userController.getUser = async (req, res, next) => {
  try {
    console.log("before getuser");
    const users = await User.find({}).exec();
    console.log("after getuser");
    const totalUser = users.length;
    const userDetails = users.map((user) => ({
      username: user.username,
      password: user.password,
    }));

    res.locals.user = { totalUser, userDetails };
    console.log(res.locals.user, "test");
    return next();
  } catch (err) {
    next({
      log: `Middleware getUserSummary error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

module.exports = userController;
