const mongoose = require("mongoose");
const Recipe = require(`./Recipe`);

async function createNewRecepie() {
  try {
    const newRecipe = await Recipe.create({
      name: "Chocolate Cake molten",
      instructions: "bake at 180C",
      prepTime: 120,
      difficulty: "easy",
    });

    console.log(createNewRecepie);
  } catch (err) {
    console.log("ERROR:", err);
  }
}

//createNewRecepie();

async function getAllTheRecepies() {
  try {
    const getAllRecepies = await Recipe.find({});

    for (let oneRecipe of getAllRecepies) {
      console.log(
        `${oneRecipe.name} ${oneRecipe.difficulty} ${oneRecipe.prepTime}`,
      );
    }
  } catch (err) {
    console.log("Error: ", err);
  }
}
//getAllTheRecepies();

async function getRecipeById() {
  const foundRecipe = await Recipe.findById(`6a4ce5c789772b445d439528`);
  console.log(foundRecipe);
}
//getRecipeById();

async function updateRecipeById() {
  const updatedRecipe = await Recipe.findByIdAndUpdate(
    `6a4ce5c789772b445d439528`,
    { name: `UM ALI MINI SWEET` },
    { new: true },
  );
  console.log(updatedRecipe);
}
//updateRecipeById();

async function deleteRecipe() {
  const deletedRecipie = await Recipe.findByIdAndDelete(
    "6a4ce63d51e6ca7bc287a8f4",
  );
  console.log("Recipe successfully deleted.");
}

//deleteRecipe();

module.exports = {
  createNewRecepie,
  getAllTheRecepies,
  getRecipeById,
  updateRecipeById,
  deleteRecipe,
};
