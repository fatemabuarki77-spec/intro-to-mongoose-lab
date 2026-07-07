const mongoose = require("mongoose");
const env = require(`dotenv`).config();
console.log(process.env.DATABASE_CONNECTION_STRING);

const Recipe = require(`./models/Recipe`);

const {
  connectToDatabase,
  createNewRecepie,
  getAllTheRecepies,
  getRecipeById,
  updateRecipeById,
  deleteRecipe,
} = require(`./models/recipeUtils`);
const connectionDB = require(`./models/db`);

connectionDB();
