// Load Modules Needed

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const inquiryController = require("../controllers/inquiryController");
const { checkAdminAuth } = require("../middleware/auth");

// Routes

router.get("/admin", checkAdminAuth, adminController.admin_index);

router.get("/admin/users", checkAdminAuth, adminController.admin_users_get);

router.get("/admin/users/:_id", checkAdminAuth, adminController.admin_user_update_get);

router.post("/admin/users/:_id", checkAdminAuth, adminController.admin_user_update_post);

router.get("/admin/users/delete/:_id", checkAdminAuth, adminController.admin_user_delete_get);

router.post("/admin/users/delete/:_id", checkAdminAuth, adminController.admin_user_delete_post);

router.get("/admin/inquiries", checkAdminAuth, inquiryController.inquiry_index);

router.post("/admin/inquiries/process/:_id", checkAdminAuth, inquiryController.inquiry_update_post);

// Export

module.exports = router;