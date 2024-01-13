const express = require("express");

const app = express();
const port = process.env.PORT || 5050;

const api = require("./routes/index.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("yipee");
});

app.listen(port, () => {
  console.log(`running on localhost:${port}`);
});

module.exports = app;
