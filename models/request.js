const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    tenants: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartment"
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    changed_on: {
        type: Date,
        default: Date.now
    }
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;