//TO DO:
//signin_index, signin_details, signin_create_get, signin_delete, signin_update_get, signin_update_post

// Load Modules Needed

const User = require("../models/user");


// Controllers

const signin_get = function(req, res) {
    res.render("sign-in");
}

const signin_post = function(req, res) {

    const feedback = {
        title: "Thank You",
        message: "This feature is coming soon. Please check back later.",
        buttonLink: "/",
        buttonText: "Back"
    }
    res.render("feedback", {feedback: feedback});
}


// Export

module.exports = {
    signin_get,
    signin_post
};