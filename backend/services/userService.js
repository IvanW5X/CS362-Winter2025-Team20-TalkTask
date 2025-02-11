import { User } from "../db/models/taskModel.js";

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

// Update A User

// Delete A User