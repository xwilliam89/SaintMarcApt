const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
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

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;