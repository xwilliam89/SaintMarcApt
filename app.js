// Load Modules Needed
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Environment Config
require("dotenv").config();
const dbConnectionString = process.env.DB_CONNECTION_STR;


// Connect to MongoDB
mongoose.connect(dbConnectionString);

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model("Message", messageSchema);


// Routes

app.get("/", function(req, res) {
    res.render("home");
});


app.post("/contactUs", function(req, res) {
    const message = new Message ({
        name: req.body.name,
        email: req.body.emailAddress,
        message: req.body.message
    });
    message.save();
    res.render("message-sent");
})



//Start Server

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started.");
});