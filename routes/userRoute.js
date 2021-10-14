// Load Modules Needed

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes

router.get("/user", userController.user_index);

router.get("/user/register", userController.user_create_get);

router.post("/user/register", userController.user_create_post);

router.get("/user/profile", userController.user_update_get);

// Export

module.exports = router;