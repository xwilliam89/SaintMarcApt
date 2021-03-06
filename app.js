// Load Modules Needed
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const inqueryRoute = require(__dirname + "/routes/inquiryRoute");
const signInRoute = require(__dirname + "/routes/signInRoute");
const userRoute = require(__dirname + "/routes/userRoute");
const adminRoute = require(__dirname + "/routes/adminRoute");
const leaseRoute = require(__dirname + "/routes/leaseRoute");
const requestRoute = require(__dirname + "/routes/requestRoute");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Connect to MongoDB
const dbConnectionString = process.env.DB_CONNECTION_STR;
mongoose.connect(dbConnectionString);


// Routes

app.get("/", function(req, res) {
    res.render("home");
});

app.use(inqueryRoute);

app.use(signInRoute);

app.use(userRoute);

app.use(adminRoute);

app.use(leaseRoute);

app.use(requestRoute);

// 404 page
app.use(function(req, res) {
    let feedback = {
        title: "404",
        message: "The page you requested is not found.",
        buttonLink: "/",
        buttonText: "Back"
    }
    
    res.render("feedback", {feedback: feedback});
});

// Start Server
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started.");
});