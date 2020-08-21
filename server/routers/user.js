'use strict';
const express = require('express')
const User = require('../controller/user')
const router = express.Router();
router.post('/login', User.login)

module.exports = router;
