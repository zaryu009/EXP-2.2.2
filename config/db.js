import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(
      "mongodb+srv://adityaathakur081_db_user:<db_Password009@>@cluster0.tekm9oo.mongodb.net/"
    );
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("ERROR ❌:", error.message);
    process.exit(1);
  }
};

export default connectDB;
