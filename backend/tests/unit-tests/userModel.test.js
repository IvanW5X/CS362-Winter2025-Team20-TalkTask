import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { User } from "../../db/models/userModel.js";

let mongoServer;

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

describe("User Model - Unit Tests", () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    it("should create a new user successfully", async () => {
        const user = new User({
            CustomerID: randomInt(1000000, 10000000),
            email: "test@test.com",
            password: "testpassword",
            Fname: "Test",
            Mname: "M",
            Lname: "User"});
        
        await user.save();

        const foundUser = await User.findOne({ CustomerID: user.CustomerID });
        expect(foundUser).toBeDefined();
        expect(foundUser.email).toBe("test@test.com");
    });

    it("should update a user's password", async () => {
        const user = new User({
            CustomerID: randomInt(1000000, 10000000),
            email: "test2@test2.com",
            password: "testpassword2",
            Fname: "Test",
            Mname: "M",
            Lname: "User"});

        await user.save();

        user.password = "newpassword";
        await user.save();

        const updatedUser = await User.findOne({ CustomerID: user.CustomerID });
        expect(updatedUser.password).toBe("newpassword");
    });

    it("should update a user's email", async () => {
        const user = new User({
            CustomerID: randomInt(1000000, 10000000),
            email: "test5@test5.com",
            password: "testpassword2",
            Fname: "Test",
            Mname: "M",
            Lname: "User"});

        await user.save();

        user.email = "newemail@gmail.com";
        await user.save();

        const updatedUser = await User.findOne({ email: user.email });
        expect(updatedUser.email).toBe("newemail@gmail.com");
    });

    it("should delete a user", async () => {
        const user = new User({
            CustomerID: randomInt(1000000, 10000000),
            email: "test3@test3.com",
            password: "testpassword2",
            Fname: "Test",
            Mname: "M",
            Lname: "User"});

        await user.save();

        await User.deleteOne({ CustomerID: user.CustomerID });
        const deletedUser = await User.findOne({ CustomerID: user.CustomerID });
        expect(deletedUser).toBe(null);
    });
});
