
const mongoose = require("mongoose");
const models = require("models");
const orderSchema = new mongoose.Schema({
  customerName: String,
  title: String,
  duration: Number,
  helper: Number,
  category: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };
