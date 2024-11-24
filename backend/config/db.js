import mongoose from "mongoose";

// Function to connect to the database
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

// Function to disconnect from the database
export const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        console.log("MongoDB Connection Closed.");
    } catch (error) {
        console.error(`Error closing MongoDB connection: ${error.message}`);
    }
};
