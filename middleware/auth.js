// Functions

function checkUserAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(401);
        return res.redirect("/sign-in");
    }

    next();
}


function checkAdminAuth(req, res, next) {
    
    let feedback = {
        title: "Access Denied!",
        message: "The Admin Portal is only open to users with the admin role. Please contact your administrator for help.",
        buttonLink: "/",
        buttonText: "Back"
      }
    
    if (!req.isAuthenticated()) {
        res.status(401);
        return res.redirect("/admin-sign-in");
    }

    if (req.user.role !== "admin") {
        res.status(403);
        return res.render("feedback", {feedback: feedback});
    }

    next();
}
// Export

module.exports = {
    checkUserAuth,
    checkAdminAuth
}