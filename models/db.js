const mongoose = require("mongoose");
const env = require(`dotenv`).config();
console.log(process.env.DATABASE_CONNECTION_STRING);

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
    console.log("Connected to database!");
  } catch (err) {
    console.log("Connection failed.", err);
  }
}
//connectToDatabase()

module.exports = connectToDatabase;
