const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
    roomNumber: {
        type: String
    },
    floorPlan: {
        type: String
    },
    bedRoom: {
        type: Double
    },
    bathRoom: {
        type: Double
    },
    balcony: {
        type: Double
    },
    size:  {
        type: Double
    },
    status: {
        type: String
    }
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;