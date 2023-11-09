const express = require('express');
const userController = require('../controlers/userController');
const verifyToken = require('../utlis/verifyUser');


const router = express.Router();

router.get("/:id",verifyToken, userController.GetUser);
router.get("/listings/:id", verifyToken, userController.getUserListings);
router.put("/update/:id", verifyToken, userController.UpdateUser);
router.delete("/delete/:id", verifyToken, userController.DeleteUser);