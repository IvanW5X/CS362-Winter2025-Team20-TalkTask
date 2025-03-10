/********************************************************************
 * File Name: categoryController.js
 * Date: 3/2/2025
 * Description: High level component for category management
 *              Handles HTTP logic and calls services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { Category } from "../db/models/categoryModel.js";
import { Task } from "../db/models/taskModel.js";
import logger from "../utils/logger.js";

export const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    logger.error(`createCategory - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const { userID } = req.params;
    const categories = await Category.find({ userID });
    res.status(200).json(categories);
  } catch (error) {
    logger.error(`getCategories - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// update category; probably able to rename or something
// export const updateCategory = here

export const deleteCategory = async (req, res) => {
  try {
    const { name, userID } = req.params;
    const deletedCategory = await Category.findOneAndDelete({
      name: name,
      userID: userID,
    });

    if (deletedCategory) {
      // Delete all tasks within category too
      await Task.deleteMany({ category: name, userID });

      res.status(200).json({
        message: "Category deleted successfully",
        category: deletedCategory,
      });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    logger.error(`deleteCategory - Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
