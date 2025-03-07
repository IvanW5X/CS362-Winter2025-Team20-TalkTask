/********************************************************************
 * File Name: categoryRoutes.js
 * Date: 3/2/2025
 * Description: Defines API endpoints for category controller
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import {
  createCategory,
  getCategories,
  // update
  deleteCategory,
} from "../controller/categoryController.js";

const router = express.Router();

// Setup routes
router.post("/create-category", createCategory);
router.get("/read-category/:userID", getCategories);
// update
router.delete("/delete/:name/:userID", deleteCategory);

export default router;
