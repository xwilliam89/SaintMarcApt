// Load Modules Needed
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const inqueryRoute = require(__dirname + "/routes/inquiryRoute");
const signInRoute = require(__dirname + "/routes/signInRoute");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Connect to MongoDB
const dbConnectionString = process.env.DB_CONNECTION_STR;
mongoose.connect(dbConnectionString);


// Routes

app.get("/", function(req, res) {
    res.render("home");
});

app.use(inqueryRoute);

app.use(signInRoute);

// Start Server
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started.");
});