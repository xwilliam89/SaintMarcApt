//TO DO:
//signin_index, signin_details, signin_create_get, signin_delete, signin_update_get, signin_update_post

// Load Modules Needed
const passport = require("passport");
const User = require("../models/user");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Controllers

const signin_get = function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect("/user");
    } else {
        res.render("sign-in");
    }
}

const signin_post = function (req, res, next) {
    let feedback = {
        title: "Sign In Failed!",
        message: "Unknown error. Please contact the administrator.",
        buttonLink: "/sign-in",
        buttonText: "Try again"
    }
    
    passport.authenticate('local', function (err, user, info) {
        if (err) { 
            return res.render("feedback", {feedback: feedback});
        }
        if (!user) { 
            feedback.message = info.message;
            return res.render("feedback", {feedback: feedback});
        }
        req.logIn(user, function (err) {
            if (err) { 
                feedback.message = info.message;
                return res.render("feedback", {feedback: feedback});
            }
            return res.redirect('/user');
        });
    })(req, res, next);
}

const signout_get = function (req, res) {
    req.logout();
    res.redirect("/");
}

const admin_signin_get = function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect("/admin");
    } else {
        res.render("admin-sign-in");
    }
}

const admin_signin_post = function (req, res, next) {
    let feedback = {
        title: "Sign In Failed!",
        message: "Unknown error. Please try again later.",
        buttonLink: "/admin-sign-in",
        buttonText: "Try again"
    }
    
    passport.authenticate('local', function (err, user, info) {
        if (err) { 
            return res.render("feedback", {feedback: feedback});
        }
        if (!user) { 
            feedback.message = info.message;
            return res.render("feedback", {feedback: feedback});
        }
        req.logIn(user, function (err) {
            if (err) { 
                feedback.message = info.message;
                return res.render("feedback", {feedback: feedback});
            }
            return res.redirect('/admin');
        });
    })(req, res, next);
}
// Export

module.exports = {
    signin_get,
    signin_post,
    signout_get,
    admin_signin_get,
    admin_signin_post
};