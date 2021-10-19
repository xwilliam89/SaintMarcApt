// Load Modules Needed

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Routes

router.get("/admin", adminController.admin_index);

router.get("/admin/users", adminController.admin_users_get);

router.get("/admin/users/:_id", adminController.admin_user_update_get);

router.post("/admin/users/:_id", adminController.admin_user_update_post);

router.get("/admin/users/delete/:_id", adminController.admin_user_delete_get);

router.post("/admin/users/delete/:_id", adminController.admin_user_delete_post);

// Export

module.exports = router;