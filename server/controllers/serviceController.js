const models = require("../models/models");

const serviceController = {};

serviceController.getService = async (req, res, next) => {
  try {
    const services = await models.Service.find({}).exec();
    res.locals.services = services;
    return next();
  } catch (err) {
    next({
      log: `Middleware getService error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

serviceController.createService = async (req, res, next) => {
  try {
    const { picture, title, duration, helper, category, price } = req.body;
    await models.Service.create({
      picture,
      title,
      duration,
      helper,
      category,
      price,
    });
    return next();
  } catch (err) {
    next({
      log: `Middleware createService error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

//update not working yet
serviceController.updateService = async (req, res, next) => {
  try {
    //need to change to name
    const { id } = req.params;
    console.log(`update ${id}`);
    const updateData = req.body;
    const serviceUpdate = await models.Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).exec();
    res.locals.serviceUpdate = serviceUpdate;
    return next();
  } catch (err) {
    next({
      log: `Middleware updateService error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

//error after delete
serviceController.deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteService = await models.Service.findByIdAndDelete(id);
    console.log("after delete");
    if (!deleteService) {
      return res.status(400).json({ message: `Service not found` });
    }
    //res.status(200).json({ message: "service deleted successfully" });
    return next();
  } catch (err) {
    next({
      log: `Middleware deleteService error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

module.exports = serviceController;
