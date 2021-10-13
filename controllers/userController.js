//TO DO:
//user_index, user_details, user_create_get, user_delete, user_update_get, user_update_post

// Load Modules Needed
const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Controllers

const user_index = function(req, res) {
    
    if (req.isAuthenticated()) {
        res.render("user");
    } else {
        res.redirect("/sign-in");
    }
}

const user_create_get = function(req, res) {
    res.render("register");
}

const user_create_post = function(req, res) {

    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
          res.redirect("/user/register");
        } else {
          passport.authenticate("local")(req, res, function(){
            res.redirect("/user");
          });
        }
      });

}


// Export

module.exports = {
    user_index,
    user_create_get,
    user_create_post
};