const mongoose = require("mongoose");
//username: charlizezhou
//password: NQlyJzbdrd6Te2UP
//IP 71.204.130.136/32
//mongodb+srv://charlizezhou:<password>@cluster0.v5hjzcu.mongodb.net/

const MONGO_URI =
  "mongodb+srv://charlizezhou:NQlyJzbdrd6Te2UP@cluster0.v5hjzcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, {
    dbName: "Rainier",
  })
  .then(() => {
    console.log("connected to Rainier MONGO_DB");
  })
  .catch((err) => {
    console.log("err in MONGO_DB connection", err);
  });

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  picture: String,
  title: String,
  duration: Number,
  helper: Number,
  category: String,
  price: Number,
});
const Service = mongoose.model("Service", serviceSchema);
module.exports = { Service };
