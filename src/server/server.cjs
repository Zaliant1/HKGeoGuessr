// import express from "express";
const express = require("express");
const axios = require("axios");
// import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

const api = require("./routes/index.cjs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.get("/api", (req, res) => {
  res.send("yipee");
});

app.listen(port, () => {
  console.log(`running on localhost:${port}`);
});
