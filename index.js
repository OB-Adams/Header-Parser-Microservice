require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

const handler = (req, res) => {
  const ip = req.ip
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']
  res.json({ipaddress: ip, language: language, software: software})
};

app.get("/api/whoami", handler);

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
