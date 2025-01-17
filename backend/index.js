/********************************************************************
 * File Name: index.js
 * Date: 1/13/2025
 * Description: Entry point for server side of development
 * Author(s): CS 362-Team 20
 ********************************************************************/


import express from 'express';
import dotenv from 'dotenv';
import path from 'path';


// Add API key path
const apiKeyPath = path.resolve("../", "./.env");
dotenv.config({ path: apiKeyPath });


const app = express();
const SERVER_PORT = 5001;
const AI_ACCESS_TOKEN = process.env.AI_API_KEY;


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
    console.log(`KEY: ${AI_ACCESS_TOKEN}`);
});
