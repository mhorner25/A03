var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();
var http = require('http').Server(app);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/assets', express.static('assets'));

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/guestbook", function (request, response) {
  response.render("index");
});
app.get("/new-entry", function (request, response) {
  response.render("new-entry");
});
app.get("/home", function (request, response) {
  response.sendFile(__dirname+"/assets/home.html");
});
app.get("/about", function (request, response) {
  response.sendFile(__dirname+"/assets/aboutme.html");
});
app.get("/contact", function (request, response) {
  response.sendFile(__dirname+"/assets/contact.html");
});

app.post("/new-entry", function (request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Incomplete entry.");
    return;
  }
  entries.push({  // store it
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("/guestbook"); 
});

// 404 error
app.use(function (request, response) {
  response.status(404).render("404");
});

// Listen on port 8081
http.listen(8081, function () {
  console.log('Listening on http://127.0.0.1:8081/');
});