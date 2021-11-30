// Load Modules Needed

const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");
const { checkUserAuth, checkAdminAuth } = require("../middleware/auth");


// Routes

router.get("/user/requests", checkUserAuth, requestController.request_get);

router.get("/user/requests/create-request", checkUserAuth, requestController.request_create_get);

router.post("/user/requests/create-request", checkUserAuth, requestController.request_create_post);

router.get("/admin/requests", checkAdminAuth, requestController.manage_request_get);

router.post("/admin/requests/update/:_id/:status", checkAdminAuth, requestController.manage_request_update_post);

// Export

module.exports = router;