const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const url = process.env.DB_URI;
const connectToMogo = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to the MongoDB successfully. 🟢");
  } catch (error) {
    console.error("MongoDB connection error ❌ :", error.message);
  }
};
module.exports = connectToMogo;
