//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

  var radius = Number(req.body.n1);
  var height = Number(req.body.n2);
 //This is a new comment for Github
  var result = Math.PI * Math.pow(radius,2) * height;

  res.send("The volume is " + result.toFixed(2));
})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
