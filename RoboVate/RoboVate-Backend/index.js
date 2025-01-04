const express = require("express");
const app = express();
const path = require("path");


app.use(
  express.static(path.join(__dirname, "../RoboVate-Frontend/dist"))
);





app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../RoboVate-Frontend/dist", "index.html"));
});

app.listen(32005, () => {
  console.log(`Server started on 32005`);
  console.log(path.join(__dirname, "../RoboVate-Frontend", "index.html"));
});

module.exports = app;
