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
export const AI_API_KEY = process.env.AI_API_KEY;
export const VITE_BACKEND_URL = process.env.VITE_BACKEND_URL;
export const AUTH0_DOMAIN = process.env.VITE_APP_AUTH0_DOMAIN;
export const AUTH0_AUDIENCE = process.env.VITE_APP_AUTH0_AUDIENCE;
export const AUTH0_CLIENT_ID = process.env.VITE_APP_AUTH0_CLIENT_ID;
