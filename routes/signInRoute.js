// Load Modules Needed

const express = require("express");
const router = express.Router();
const signInController = require("../controllers/signInController");


// Routes

router.get("/sign-in", signInController.signin_get);

router.post("/sign-in", signInController.signin_post);

router.get("/sign-out", signInController.signout_get);

// Export

module.exports = router;