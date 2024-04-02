const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/api", serviceRoutes); //correct directions??

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//could not read ejs

app.set("view engine", "ejs");
app.set("views", "./views");

// const MONGO_URI =
//   "mongodb+srv://charlizezhou:NQlyJzbdrd6Te2UP@cluster0.v5hjzcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(MONGO_URI, {
//     dbName: "Rainier",
//   })
//   .then(() => {
//     console.log("connected to Rainier MONGO_DB");
//   })
//   .catch((err) => {
//     console.log("err in MONGO_DB connection", err);
//   });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
