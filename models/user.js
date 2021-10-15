const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        dropDups: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    paymentMethod: {
        type: String
    },
    ccName: {
        type: String
    },
    ccNumber: {
        type: String
    },
    ccExpiration: {
        type: Number
    },
    ccCvv: {
        type: Number
    },
    status: {
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

const options = {
    usernameField:"email",
    usernameLowerCase:"true"
}

userSchema.plugin(passportLocalMongoose, options);

const User = mongoose.model("User", userSchema);

module.exports = User;