const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
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

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;