// Load Modules Needed

const express = require("express");
const router = express.Router();
const inquiryController = require("../controllers/inquiryController");


// Routes

router.post("/inquiry", inquiryController.inquiry_create_post);


// Export

module.exports = router;