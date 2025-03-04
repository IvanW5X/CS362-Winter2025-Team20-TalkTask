/********************************************************************
 * File Name: connection.js
 * Date: 2/15/2025
 * Description: File for connecting to MongoDB (TalkTask)
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { MONGO_URI } from "../utils/variables.js";
import mongoose from "mongoose";

export const connectTTDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB via Mongoose!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
