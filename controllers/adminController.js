// Load Modules Needed
const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Controllers

const admin_index = function (req, res) {

  if (req.isAuthenticated()) {
    User.findOne({_id: req.user._id}, function(err, foundUser){
      if(!err){
        res.render("admin", {user: foundUser});
      }
    });
    
  } else {
    res.redirect("/admin-sign-in");
  }

}


const admin_users_get = function (req, res) {
  
  if (req.isAuthenticated()) {
    User.find({}, function(err, foundUsers){
      if(!err){
        res.render("manage-users", {users: foundUsers});
      }
    });
    
  } else {
    res.redirect("/admin-sign-in");
  }

}


const admin_user_update_get = function (req, res) {

  if (req.isAuthenticated()) {
    User.findOne({_id: req.params._id}, function(err, foundUser){
      if(!err){
        res.render("manage-user-profile", {user: foundUser});
      }
    });
    
  } else {
    res.redirect("/admin-sign-in");
  }
}


const admin_user_update_post = function (req, res) {

  let feedback = {
    title: "User Updated",
    message: "The user's profile has been updated.",
    buttonLink: "/admin/users",
    buttonText: "Back"
  }

  const query = {_id: req.params._id};
  const update = {
    status: req.body.status,
    role: req.body.role,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    paymentMethod: req.body.paymentMethod,
    ccName: req.body.ccName,
    ccNumber: req.body.ccNumber,
    ccExpiration :req.body.ccExpiration,
    ccCvv :req.body.ccCvv
  };

  User.findOneAndUpdate(query, update, function(err){
    if (!err) {
      res.render("feedback", {feedback: feedback});
    } else {
      feedback.title = "Update Failed!";
      feedback.message = err.message;
      feedback.buttonLink = "/admin/users";
      feedback.buttonText = "Try again";
      res.render("feedback", {feedback: feedback});
    }
  });

}

const admin_user_delete_get = function (req, res) {

  let confirm = {
    message: "You are going delete the user ",
    cancelLink: "/admin/users",
    cancelText: "Cancel",
    proceedLink: "/admin/users/delete/",
    proceedText: "Confirm"
  }

  if (req.isAuthenticated()) {
    User.findOne({_id: req.params._id}, function(err, foundUser){
      if(!err){
        confirm.message = confirm.message + foundUser.firstName + " " + foundUser.lastName + " (" + foundUser.email + ").";
        confirm.proceedLink = confirm.proceedLink + foundUser._id;
        res.render("admin-action-confirm", {confirm: confirm});
      }
    });
    
  } else {
    res.redirect("/admin-sign-in");
  }
}

const admin_user_delete_post = function (req, res) {
  User.deleteOne({ _id: req.params._id }, function (err) {
    if (!err) {
      res.redirect("/admin/users");
    }
  });
}

// Export

module.exports = {
    admin_index,
    admin_users_get,
    admin_user_update_get,
    admin_user_update_post,
    admin_user_delete_get,
    admin_user_delete_post
};