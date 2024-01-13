import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("yipee");
});

app.listen(port, () => {
  console.log(`running on localhost:${port}`);
});
