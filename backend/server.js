import express from "express";
import data from "./data";

const app = express();

app.get("/", (req, res) => {
  res.send(data.items);
});

// app.use(express.static("myapp"));

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});

// const express = require("express");
// const app = express();
// app.listen(5000, () => console.log("listening at 5000"));
