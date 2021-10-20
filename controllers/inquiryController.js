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

const inquiry_index = function(req, res) {
    if (req.isAuthenticated()) {
        Inquiry.find({status: "new"}, function(err, foundInquiries){
          if(!err){
            res.render("inquiries", {inquiries: foundInquiries});
          }
        });
        
      } else {
        res.redirect("/admin-sign-in");
      }
}

const inquiry_update_post = function (req, res) {
  
    const query = {_id: req.params._id};
    const update = {
      status: "proccessed",
      changed_on: Date.now()
    };
  
    Inquiry.findOneAndUpdate(query, update, function(err){
      if (!err) {
        res.redirect("/admin/inquiries");
      } else {
        console.log(err);
      }
    });
  
}

// Export

module.exports = {
    inquiry_create_post,
    inquiry_index,
    inquiry_update_post
};