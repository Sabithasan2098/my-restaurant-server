import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";
import { Server } from "http";

dotenv.config();

const PORT = process.env.PORT || 5000;

let server: Server; // 🔹 বাইরের স্কোপে ডিক্লেয়ার করা হয়েছে

// Start Server
async function main() {
  try {
    await mongoose.connect(process.env.DB_URI as string);

    server = app.listen(PORT, () => {
      // 🔹 এখানে "server" ভেরিয়েবল সেট করা হলো
      console.log(`🚀 Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed!", error);
  }
}

// Call the main function
main();

// Handle Unhandled Rejections
process.on("unhandledRejection", () => {
  if (server) {
    server.close(() => {
      console.log("💥 Server closed due to unhandled rejection!");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle Uncaught Exceptions
process.on("uncaughtException", () => {
  console.log("💥 Uncaught Exception occurred! Shutting down...");
  process.exit(1);
});
