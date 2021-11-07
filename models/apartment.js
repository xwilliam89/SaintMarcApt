const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
    roomNumber: {
        type: String
    },
    floorPlan: {
        type: String
    },
    bedRoom: {
        type: Number
    },
    bathRoom: {
        type: Number
    },
    balcony: {
        type: Number
    },
    size:  {
        type: Number
    },
    status: {
        type: String
    }
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;