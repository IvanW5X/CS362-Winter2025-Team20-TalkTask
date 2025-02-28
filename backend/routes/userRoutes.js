/********************************************************************
 * File Name: userRoutes.js
 * Date: 2/15/2025
 * Description: Defines API endpoints for user controller
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

// Setup routes
router.post("/create-user", createUser);
router.post("/read-user/:userId", getUser);
router.patch("/update-user/:userId", updateUser);
router.delete("/delete-user/:userId", deleteUser);

export default router;
