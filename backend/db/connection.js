/********************************************************************
 * File Name: connection.js
 * Date: 2/15/2025
 * Description: File for connecting to MongoDB (TalkTask)
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { MongoClient, ServerApiVersion } from "mongodb";
import { MONGO_URI } from "../utils/variables.js"


import mongoose from "mongoose";


// // Create MongoDB client
// export const client = new MongoClient(MONGO_URI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// // Function to connect to MongoDB
// export const connectTTDB = async () => {
//     try {
//         await client.connect();
//         console.log("Successfully connected to MongoDB!");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     } finally {
//         await client.close();
//     }
// };

// // Handle graceful shutdown
// process.on("SIGINT", async () => {
//     try {
//         console.log("\nClosing MongoDB connection...");
//         await client.close();
//         console.log("MongoDB connection closed.");
//     } catch (error) {
//         console.log("MongoDB already closed: ", error)
//     }
//     process.exit(0);
// });


export const connectTTDB = async ()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB via Mongoose!");

    }catch{
        console.error("MongoDB connection error:", error);
    }

};