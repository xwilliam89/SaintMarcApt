// Load Modules Needed

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { checkUserAuth } = require("../middleware/auth");

// Routes

router.get("/user", checkUserAuth, userController.user_index);

router.get("/user/register", userController.user_create_get);

router.post("/user/register", userController.user_create_post);

router.get("/user/profile", checkUserAuth, userController.user_update_get);

router.post("/user/profile", checkUserAuth, userController.user_update_post);

// Export

module.exports = router;