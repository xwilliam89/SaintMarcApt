//TO DO:
//signin_index, signin_details, signin_create_get, signin_delete, signin_update_get, signin_update_post

// Load Modules Needed
const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Controllers

const signin_get = function(req, res) {
    if (req.isAuthenticated()) {
        res.redirect("/user");
    } else {
        res.redirect("/sign-in");
    }
}

const signin_post = function(req, res) {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if (err) {
            res.redirect("/sign-in");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/user");
            });
        }
    });

}


// Export

module.exports = {
    signin_get,
    signin_post
};