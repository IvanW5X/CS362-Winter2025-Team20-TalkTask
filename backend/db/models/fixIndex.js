import mongoose from "mongoose";
import { MONGO_URI } from "../../utils/variables.js";


// const fixIndexes = async () => {
//   await mongoose.connect(MONGO_URI); //replace with uri from .env
//   const indexes = await mongoose.connection.db.collection("categories").indexes();
  
//   if (indexes.some(index => index.name === "userId_1")) {
//     await mongoose.connection.db.collection("categories").dropIndex("userId_1");
//     console.log("Dropped unique index on userId_1.");
//   } else {
//     console.log("No unique index on userId_1 found.");
//   }

//   mongoose.connection.close();
// };

// fixIndexes();


const cleanupUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI, { //replace with uri from .env
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 

    const result = await mongoose.connection.db.collection("categories").deleteMany({
      userId: { $exists: true }, // Find documents with "userId"
    });

    console.log(`Deleted ${result.deletedCount} documents that used "userId".`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error cleaning up users:", error);
  }
};

cleanupUsers();
