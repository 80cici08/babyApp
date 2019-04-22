// Get the dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionSecret = 'hello world';
const passport = require('passport');

// Init express server app...
const app = express();

app.use(cookieParser());
app.use(session({secret: process.env.SESSION_SECRET || sessionSecret}));
app.use(passport.initialize());
app.use(passport.session());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/BabyApp")));
// user body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// call the server services for each component
require("./server/app")(app);

// db connection
const dbConnection = require('./server/models/models.server');

// for other calls, render the index page in dist folder
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/BabyApp/index.html'));
});

// set port
const port = process.env.PORT || "3200";
app.set("port", port);
// Create HTTP server and listen to the port
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Running on port 3200");
  console.log(`App root: ${__dirname}`);
});
