// Load Modules Needed

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// Routes

router.get("/register", userController.user_create_get);

router.post("/register", userController.user_create_post);


// Export

module.exports = router;