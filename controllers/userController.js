//TO DO:
//user_index, user_details, user_create_get, user_delete, user_update_get, user_update_post

// Load Modules Needed
const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Controllers

const user_index = function (req, res) {

  if (req.isAuthenticated()) {
    User.findOne({_id: req.user._id}, function(err, foundUser){
      if(!err){
        res.render("user", {user: foundUser});
      }
    });
    
  } else {
    res.redirect("/sign-in");
  }

}


const user_create_get = function (req, res) {
  res.render("register");
}


const user_create_post = function (req, res) {

  let feedback = {
    title: "Register Failed!",
    message: "",
    buttonLink: "/user/register",
    buttonText: "Try again"
  }

  User.register({email:req.body.email}, req.body.password, function(err, user) {
    if (err) {
      feedback.message = err.message;
      res.render("feedback", {feedback: feedback});
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/user");
      });
    }
  });

}


const user_update_get = function (req, res) {
  if (req.isAuthenticated()) {
    res.render("user-profile");
  } else {
    res.redirect("/sign-in");
  }
}


// Export

module.exports = {
  user_index,
  user_create_get,
  user_create_post,
  user_update_get
};