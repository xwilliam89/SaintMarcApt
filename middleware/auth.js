// Functions

function checkUserAuth(req, res, next) {

    let feedback = {
        title: "Access Denied!",
        message: "",
        buttonLink: "/",
        buttonText: "Back"
      }

    if (!req.isAuthenticated()) {
        res.status(401);
        return res.redirect("/sign-in");
    }

    if (req.user.status !== "active") {
        req.logout();
        res.status(403);
        feedback.message = "You account is disabled. Please contact your administrator for help.";
        return res.render("feedback", {feedback: feedback});
    }

    next();
}


function checkAdminAuth(req, res, next) {
    
    let feedback = {
        title: "Access Denied!",
        message: "",
        buttonLink: "/",
        buttonText: "Back"
      }
    
    if (!req.isAuthenticated()) {
        res.status(401);
        return res.redirect("/admin-sign-in");
    }

    if (req.user.status !== "active") {
        req.logout();
        res.status(403);
        feedback.message = "You account is disabled. Please contact your administrator for help.";
        return res.render("feedback", {feedback: feedback});
    }
    
    if (req.user.role !== "admin") {
        res.status(403);
        feedback.message = "The Admin Portal is only open to users with the admin role. Please contact your administrator for help.";
        return res.render("feedback", {feedback: feedback});
    }

    next();
}


// Export

module.exports = {
    checkUserAuth,
    checkAdminAuth
}