const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 }));
app.use(bodyParser.json())

app.use(express.static("public"));

// index
app.get("/", function (req, res) {
    console.log(req.ip)
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
    const ip = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.send({ip: ip, language: language, software: software});
  })


var listener = app.listen(process.env.PORT || 5500, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
  
  