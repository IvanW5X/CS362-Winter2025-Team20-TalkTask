/********************************************************************
 * File Name: userController.js
 * Date: 2/15/2025
 * Description: High level component for user management
 *              Handles HTTP logic and calls services
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { User } from "../db/models/userModel.js";

// Create a User
export const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

// Read A User
export const getUser = async (userID) => {
  try {
    const user = await User.findById(userID);
    return user;
  } catch (error) {
    throw new Error("Error getting user: " + error.message);
  }
};

// Update A User
export const updateUser = async (userID, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userID, updateData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

// Delete A User
export const deleteUser = async (userID) => {
  try {
    await User.findByIdAndDelete(userID);
    return { message: "User deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};
