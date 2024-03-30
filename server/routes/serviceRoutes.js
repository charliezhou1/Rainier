const express = require("express");
const router = express.Router();
const Service = require("../models/models");

// router.get("/", async (req, res) => {
//   try {
//     const service = await Service.find();
//     res.json(service);
//   } catch (err) {
//     console.error("error in serviceRouter fetching", err);
//     res.status(500).json({ error: "error in serviceRoutes fetching" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const service = await Service.create(req.body);
//     res.status(200).json(service);
//   } catch (err) {
//     console.error("error in serviceRouter creating", err);
//     res.status(500).json({ error: "error in serviceRoutes creating" });
//   }
// });

router.get("/", (req, res) => {
  console.log("in the serviceRoutes");
  res.status(200).json();
});

module.exports = router;
