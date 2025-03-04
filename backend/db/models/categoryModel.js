/********************************************************************
 * File Name: categoryModel.js
 * Date: 3/2/2025
 * Description: File for category schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true},
    userId: { type: String, unique: true, required: true},
    count: { type: Number, required: true, default: 0},
});

export const Category = mongoose.model("Category", categorySchema);
