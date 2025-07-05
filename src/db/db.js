const mongoose = require("mongoose");
const { enums } = require("../../constants");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO}/${enums.db.name}`);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
