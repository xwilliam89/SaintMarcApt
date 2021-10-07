//TO DO:
//inquiry_index, inquiry_details, inquiry_create_get, inquiry_delete, inquiry_update_get, inquiry_update_post

// Load Modules Needed

const Inquiry = require("../models/inquiry");


// Controllers

const inquiry_create_post = async function(req, res) {
    const inquiry = new Inquiry ({
        name: req.body.name,
        email: req.body.emailAddress,
        message: req.body.message
    });

    let feedback = {
        title: "Message Sent",
        message: "Thank you for contacting us. We will get back to your shortly.",
        buttonLink: "/",
        buttonText: "Back"
    }

    try {
        await inquiry.save();
        
        
    } catch (err) {
        feedback.title = "Oops!";
        feedback.message = "Something is wrong. Please try again later.";
    }

    res.render("feedback", {feedback: feedback});
};


// Export

module.exports = {
    inquiry_create_post
};