const express = require('express');
const router = express.Router();

const User = require('../controller/user');

router.post("/signup", User.Signup);
router.post("/profile", User.upload.single('avatar'), User.filedata);

module.exports = router;