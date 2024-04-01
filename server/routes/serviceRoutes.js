const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getService, (req, res) => {
  console.log("in the serviceRoutes");
  res.status(200).json(res.locals.services);
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


router.delete(
  "/service/:id",
  serviceController.deleteService,
  (req, res) => {
    console.log(`in the delete`);
    res.status(200).json({ message: `service deleted successfully` });
  }
);

module.exports = router;
