const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Dobrý den.");
});

app.get("/contact", function(req, res) {
  res.send("Gymnázium, Arabská 14, Praha 6");
});

app.get("/about", function(req, res) {
  res.send("Jmenuji se Václav a učím se v node.js");
});

app.get("/hobbies", function(req, res) {
  var hobbies = "Node.js, filatelie";
  res.send(hobbies);
});

app.get("/calc", function(req, res) {
  var formular = "<form action='/calc' method='post'>";
  formular += "<input type='text' name='n1' placeholder='První číslo' />";
  formular += "<input type='text' name='n2' placeholder='Druhý číslo' />";
  formular += "<button type='submit' name='submit'>Kalkuluj!</button>";
  formular += "</form>";
  res.send(formular);
});

app.post("/calc", function(req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);

  var result = n1 + n2;

  res.send("Součet je: " + result);
});

app.get("/fibo/:n", function(req, res) {
  var n = Number(req.params.n);
  res.send("Ahoj " + n);
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
