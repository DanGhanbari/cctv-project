// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").load();
// }
// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// console.log(stripeSecretKey);

import express from "express";
import data from "./data";

const app = express();

app.get("/api/camera", (req, res) => {
  res.send(data.items.itemCamera);
});
app.get("/api/DVR", (req, res) => {
  res.send(data.items.itemDVR);
});

app.listen(5000, () => {
  console.log("server started at https://localhost:5000");
});

// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.static("public"));

// app.listen(5000, console.log("connected"));
