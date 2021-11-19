// Load Modules Needed
const Request = require("../models/request");
const Lease = require("../models/lease");

// Controllers

const request_get = function (req, res) {

    Request.find({ tenants: req.user._id })
        .populate([
            {
                path: "apartment",
                select: "roomNumber"
            }
        ])
        .exec(function (err, foundRequests) {
            if (!err) {
                res.render("view-requests", { requests: foundRequests });
            }
        });

}


const request_create_get = function (req, res) {
    
    Lease.find({ tenants: req.user._id, status: "active" })
    .populate([
        {
            path: "apartment",
            select: "roomNumber"
        }
    ])
    .exec(function (err, foundLeases) {
        if (!err) {
            res.render("create-request", { leases: foundLeases });
        }
    });

}


const request_create_post = function (req, res) {

    const request = new Request ({
        tenants: req.user._id,
        apartment: req.body.apartment,
        status: "new",
        description: req.body.description
    });

    request.save();

    res.redirect("/user/requests");

}


// Export

module.exports = {
    request_get,
    request_create_get,
    request_create_post
};