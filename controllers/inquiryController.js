//TO DO:
//inquiry_index, inquiry_details, inquiry_create_get, inquiry_delete

// Load Modules Needed

const Inquiry = require("../models/inquiry");


// Controllers

const inquiry_create_post = function(req, res) {
    const inquiry = new Inquiry ({
        name: req.body.name,
        email: req.body.emailAddress,
        message: req.body.message
    });
    inquiry.save();
    res.render("message-sent");
};


// Export

module.exports = {
    inquiry_create_post
};