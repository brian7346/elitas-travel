const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/static", express.static(__dirname + "/assets"));

app.use("/api/planes", require("./routes/planes"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  // Указываем папку, в которой нужно искать
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

