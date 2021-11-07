// Load Modules Needed

const express = require("express");
const router = express.Router();
const leaseController = require("../controllers/leaseController");
const { checkUserAuth, checkAdminAuth } = require("../middleware/auth");

// Routes

router.get("/user/leases", checkUserAuth, leaseController.lease_get);

router.get("/user/leases/apply", checkUserAuth, leaseController.lease_create_get);

router.post("/user/leases/apply", checkUserAuth, leaseController.lease_create_post);

router.get("/admin/leases", checkAdminAuth, leaseController.manage_lease_get);

router.get("/admin/leases/:_id", checkAdminAuth, leaseController.lease_update_get);

// Export

module.exports = router;