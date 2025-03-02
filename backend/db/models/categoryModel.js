/********************************************************************
 * File Name: categoryModel.js
 * Date: 3/2/2025
 * Description: File for category schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: True},
    userId: { type: String, unique: True, required: True},
});

export const catagory = mongoose.model('Catagory', categorySchema);
