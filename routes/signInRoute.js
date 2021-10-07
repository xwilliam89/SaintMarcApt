// Load Modules Needed

const express = require("express");
const router = express.Router();
const signInController = require("../controllers/signInController");


// Routes

router.get("/sign-in", signInController.signin_get);

router.post("/sign-in", signInController.signin_post);

// Export

module.exports = router;