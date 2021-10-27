const mongoose = require("mongoose");

const leaseSchema = new mongoose.Schema({
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
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    monthlyRate: {
        type: Number
    }
});

const Lease = mongoose.model("Lease", leaseSchema);

module.exports = Lease;