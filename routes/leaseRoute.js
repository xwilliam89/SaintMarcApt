// Load Modules Needed

const express = require("express");
const router = express.Router();
const leaseController = require("../controllers/leaseController");
const { checkUserAuth } = require("../middleware/auth");

// Routes

router.get("/user/leases", checkUserAuth, leaseController.lease_get);

router.get("/user/leases/apply", checkUserAuth, leaseController.lease_create_get);

router.post("/user/leases/apply", checkUserAuth, leaseController.lease_create_post);

// Export

module.exports = router;