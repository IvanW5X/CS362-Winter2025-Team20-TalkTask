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
router.post("/", createUser);
router.post("/:userId", getUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
