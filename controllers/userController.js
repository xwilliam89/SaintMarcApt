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

  User.findOne({ _id: req.user._id }, function (err, foundUser) {
    if (!err) {
      res.render("user", { user: foundUser });
    }
  });

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

  User.register(
    {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: "guest",
      status: "active"
    },
    req.body.password,
    function (err, user) {
      if (err) {
        feedback.message = err.message;
        res.render("feedback", { feedback: feedback });
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/user");
        });
      }
    });

}


const user_update_get = function (req, res) {

  User.findOne({ _id: req.user._id }, function (err, foundUser) {
    if (!err) {
      res.render("user-profile", { user: foundUser });
    }
  });

}


const user_update_post = function (req, res) {

  let feedback = {
    title: "Profile Updated",
    message: "Your information has been updated.",
    buttonLink: "/user",
    buttonText: "Back"
  }

  const query = { _id: req.user._id };
  const update = {
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
    ccExpiration: req.body.ccExpiration,
    ccCvv: req.body.ccCvv
  };

  User.findOneAndUpdate(query, update, function (err) {
    if (!err) {
      res.render("feedback", { feedback: feedback });
    } else {
      feedback.title = "Update Failed!";
      feedback.message = err.message;
      feedback.buttonLink = "/user/profile";
      feedback.buttonText = "Try again";
      res.render("feedback", { feedback: feedback });
    }
  });


}


// Export

module.exports = {
  user_index,
  user_create_get,
  user_create_post,
  user_update_get,
  user_update_post
};