const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello naeim ahmad!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(80, () => {
  console.log("App listening on port 3000!");
});
