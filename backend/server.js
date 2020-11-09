// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").load();
// }
// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// console.log(stripeSecretKey);

import express from "express";
import data from "./data";

const app = express();

app.get("/", (req, res) => {
  res.send(data.items);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});


// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.static("public"));

// app.listen(5000, console.log("connected"));
