// Load Modules Needed
const Lease = require("../models/lease");


// Controllers

const lease_get = function (req, res) {

    Lease.find({ tenants: req.user._id }).
        populate({
            path: "tenants",
            select: "firstName lastName"
        }).
        exec(function (err, foundLeases) {
            if (!err) {
                res.render("view-leases", { leases: foundLeases });
            }
        });

}

const lease_create_get = function (req, res) {

    res.render("apply-lease");

}

const lease_create_post = async function (req, res) {

    const lease = new Lease({
        tenants: req.user._id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: "Pending"
    });

    let feedback = {
        title: "Application Submitted",
        message: "Thank you. We will review your application and get back to you shortly.",
        buttonLink: "/user/leases",
        buttonText: "Back"
    }

    try {
        await lease.save();


    } catch (err) {
        feedback.title = "Oops!";
        feedback.message = "Something is wrong. Please try again later.";
    }

    res.render("feedback", { feedback: feedback });
}

// Export

module.exports = {
    lease_get,
    lease_create_get,
    lease_create_post
};