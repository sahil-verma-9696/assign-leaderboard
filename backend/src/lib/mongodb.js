// lib/mongodb.js
import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected");

    mongoose.connection.on("disconnected", () =>
      console.log("DB_disconnected")
    );
    mongoose.connection.on("reconnected", () => console.log("DB_reconnected"));
    mongoose.connection.on("disconnecting", () =>
      console.log("DB_disconnecting")
    );
    mongoose.connection.on("close", () => console.log("DB_close"));
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
}
