const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");

router.get("/", serviceController.getService, (req, res) => {
  console.log("in the serviceRoutes");
  res.status(200).json(res.locals.services);
});

router.get("/order", orderController.getAllOrder, (req, res) => {
  console.log("in the order");
  console.log(res.locals.orders);
  res.status(200).json(res.locals.orders);
  // res.render("index.ejs");
  // res.status(200).json({});
});

// router.get("/summary", (req, res) => {
//   res.render("index.ejs");
// });

router.post("/createorder", orderController.createOrder, (req, res) => {
  console.log("create order");
  res.status(200).json({});
});

router.post("/createaccount", userController.createUser, (req, res) => {
  console.log("create account");
  res.status(200).json({});
});

// router.get("/user", userController.getUser, (req, res) => {
//   console.log("getuser below");
//   console.log(res.locals.users);
//   res.status(200).json(res.locals.users);
// });

router.post("/loginaccount", userController.verifyUser, (req, res) => {
  console.log("login in successfully");
  res.status(200).json({});
});

router.post("/service", serviceController.createService, async (req, res) => {
  res.status(200).json({});
});

router.patch(
  "/service/:id",
  serviceController.updateService,
  async (req, res) => {
    res.status(200).json(res.locals.serviceUpdate);
  }
);

router.delete("/service/:id", serviceController.deleteService, (req, res) => {
  console.log(`in the delete`);
  res.status(200).json({ message: `service deleted successfully` });
});

router.post("/createuser", userController.createUser, (req, res) => {
  console.log("in the signup");
  res.status(200).json({ message: `user created successfully` });
});

router.get("/summary", orderController.getSummary, (req, res) => {
  console.log("get summary");
  res.render("index.ejs", { summary: res.locals.summary });
});

router.get("/user", userController.getUser, (req, res) => {
  console.log("getuser below");
  res.render("crm.ejs", {user: res.locals.user})
  // console.log(res.locals.users);
  // res.status(200).json(res.locals.users);
});

module.exports = router;
