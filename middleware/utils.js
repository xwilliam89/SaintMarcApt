// Load Modules Needed
const Apartment = require("../models/apartment");


// Functions

const get_available_apts = function (req, res, next) {
    
    Apartment.find(
        { 
            $or: [{status: "available"}, {roomNumber: "to be assigned"}] 
        }
        , function (err, foundApts) {
        req.availableApts = foundApts;
        next();
    });

}

// Export

module.exports = {
    get_available_apts
};