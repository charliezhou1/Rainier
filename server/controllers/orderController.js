const Order = require("../models/order");
const orderController = {};

orderController.createOrder = async (req, res, next) => {
  try {
    const {
      customerName,
      title,
      duration,
      helper,
      category,
      price,
      createdAt,
    } = req.body;
    //console.log(username, password);
    const newOrder = await Order.create({
      customerName,
      title,
      duration,
      helper,
      category,
      price,
      createdAt,
    });
    req.order = newOrder;
    console.log(`new order ${req.order}`);
    return next();
  } catch (err) {
    next({
      log: `orderController.createOrder error ${err}`,
      message: `{err.message}`,
    });
  }
};

orderController.getAllOrder = async (req, res, next) => {
  try {
    console.log("before getorder");
    const orders = await Order.find({}).exec();
    console.log("after getorder");
    res.locals.orders = orders;
    return next();
  } catch (err) {
    next({
      log: `Middleware getOrder error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

orderController.getSummary = async (req, res, next) => {
  try {
    const orders = await Order.find({}).exec();
    const totalOrder = orders.length;
    let totalDuration = 0;
    let totalHelper = 0;
    for (const order of orders) {
      totalDuration += order.duration;
      totalHelper += order.helper;
    }

    const detailedOrder = orders.map((order) => ({
      customerName: order.customerName,
      title: order.title,
      duration: order.duration,
      helper: order.helper,
      category: order.category,
      price: order.price,
      //createdAt: order.createdAt,
    }));
    // console.log("get summary start");
    // console.log(totalDuration, totalOrder);
    // console.log(detailedOrder);
    res.locals.summary = {
      totalOrder,
      totalDuration,
      totalHelper,
      detailedOrder,
    };
    console.log(res.locals.summary);
    return next();
  } catch (err) {
    next({
      log: `Middleware getSummary error ${err}`,
      status: 500,
      message: { err: `An error in middleware occured` },
    });
  }
};

module.exports = orderController;
