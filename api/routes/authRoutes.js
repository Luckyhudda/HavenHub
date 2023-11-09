const express = require('express');
const authControler = require('../controlers/authController');
const router = express.Router();

router.post('/signup', authControler.signup);

module.exports = router;