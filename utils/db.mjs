import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/graphqldemo');
        console.log("Database connection established!")
    } catch (error) {
        console.error("Error connecting to MongoDB: " + error)
    }
}