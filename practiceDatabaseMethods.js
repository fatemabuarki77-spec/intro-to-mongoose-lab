const mongoose = require("mongoose");
const env = require(`dotenv`).config();
console.log(process.env.DATABASE_CONNECTION_STRING);
const Recipe = require(`./models/Recipe`);
// const sweet1 = {
//   name: "Chocolate Cake molten",
//   instructions: "bake at 180C",
//   prepTime: 120,
//   difficulty: "easy",
// };
// const sweet2 = {
//   name: "Um Ali Sweet",
//   instructions: "bake at 180C",
//   prepTime: 120,
//   difficulty: "Medium",
// };
// const chocoId = `6a4d0f622775ef6ef97da33a`;
// const umAliId = `6a4d0f891d162c0c430e20cd`;
// const newData = { name: `Date Cake` };

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
