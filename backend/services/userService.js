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
export const getUser = async (userID) => {
    try {
        const user = await User.findById(userID);
        return user;
    } catch (error) {
        throw new Error("Error getting user: " + error.message);
    }
};

// Update A User

// Delete A User