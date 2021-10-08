//TO DO:
//user_index, user_details, user_create_get, user_delete, user_update_get, user_update_post

// Load Modules Needed

const User = require("../models/user");


// Controllers

const user_create_get = function(req, res) {
    res.render("register");
}

const user_create_post = function(req, res) {

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
    user_create_get,
    user_create_post
};