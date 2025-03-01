/********************************************************************
 * File Name: userModel.js
 * Date: 2/15/2025
 * Description: Fie for user schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userID: { type: Number, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },             // Should be hashed before saving
    Fname: { type: String, required: true },
    Lname: { type: String, required: true },
});

export const User = mongoose.model('User', userSchema);
