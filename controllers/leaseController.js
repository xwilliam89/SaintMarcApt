// Load Modules Needed
const Lease = require("../models/lease");
const Apartment = require("../models/apartment");

// Controllers

const lease_get = function (req, res) {

    Lease.find({ tenants: req.user._id })
        .populate([
            {
                path: "tenants",
                select: "firstName lastName"
            },
            {
                path: "apartment",
                select: "roomNumber"
            }
        ])
        .exec(function (err, foundLeases) {
            if (!err) {
                res.render("view-leases", { leases: foundLeases });
            }
        });

}

const lease_create_get = function (req, res) {

    res.render("apply-lease");

}

const lease_create_post = function (req, res) {

    const lease = new Lease({
        tenants: req.user._id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: "pending"
    });

    let feedback = {
        title: "Application Submitted",
        message: "Thank you. We will review your application and get back to you shortly.",
        buttonLink: "/user/leases",
        buttonText: "Back"
    }

    Apartment.findOne({ floorPlan: req.body.floorPlan.toLowerCase(), roomNumber: "to be assigned" })
    .exec(async function (err, foundApartment) {

        try {
            lease.apartment = foundApartment._id;
            await lease.save();
            return res.render("feedback", { feedback: feedback });
        } catch (err) {
            feedback.title = "Oops!";
            feedback.message = "Something is wrong. Please try again later.";
            return res.render("feedback", { feedback: feedback });
        }
        
    });
    
}

const manage_lease_get = function (req, res) {
    Lease.find()
        .populate([
            {
                path: "tenants",
                select: "firstName lastName"
            },
            {
                path: "apartment",
                select: "roomNumber floorPlan"
            }
        ])
        .exec(function (err, foundLeases) {
            if (!err) {
                res.render("manage-leases", { leases: foundLeases });
            }
        });
}

const lease_update_get = function (req, res) {
    
    Lease.findOne({ _id: req.params._id })
        .populate([
            {
                path: "tenants",
                select: "firstName lastName email"
            },
            {
                path: "apartment",
                select: "roomNumber floorPlan"
            }
        ])
        .exec(function (err, foundLease) {
            if (!err) {
                res.render("manage-lease-details", { lease: foundLease });
            }
        });
}

// Export

module.exports = {
    lease_get,
    lease_create_get,
    lease_create_post,
    manage_lease_get,
    lease_update_get
};