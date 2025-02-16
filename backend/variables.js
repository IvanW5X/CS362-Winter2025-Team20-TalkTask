/********************************************************************
 * File Name: variables.js
 * Date: 1/27/2025
 * Description: JS file for storing and managing common variables
 * Author(s): CS 362-Team 20
 ********************************************************************/

import path from "path";
import dotenv from "dotenv";

// Add .env path
const envFilePath = path.resolve("../", "./.env");
dotenv.config({ path: envFilePath });

export const FRONTEND_URL = process.env.FRONTEND_URL;
export const SERVER_PORT = process.env.SERVER_PORT;
export const MONGO_URI = process.env.MONGO_URI;
