const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    tests post route
// @access  Public route
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
