import mongoose from "mongoose";
import config from "../config.mjs";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL);
        console.log("Database connection established!")
    } catch (error) {
        console.error("Error connecting to MongoDB: " + error)
    }
}