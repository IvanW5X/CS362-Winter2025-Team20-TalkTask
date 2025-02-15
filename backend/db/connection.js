import { MongoClient, ServerApiVersion } from "mongodb";

// Variables
const uri = process.env.MONGO_URI;

// Create MongoDB client
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Function to connect to MongoDB
export const connectTTDB = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

// Handle graceful shutdown
process.on("SIGINT", async () => {
    console.log("\nClosing MongoDB connection...");
    await client.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
});
