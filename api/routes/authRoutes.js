import express from "express";
import authControler from "../controlers/authController";
const router = express.Router();

router.post('/signup', authControler.signup);

module.exports = router;