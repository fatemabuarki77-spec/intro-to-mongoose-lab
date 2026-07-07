const mongoose = require("mongoose");
const Recipe = require(`./Recipe`);
const sweet1 = {
  name: "Chocolate Cake molten",
  instructions: "bake at 180C",
  prepTime: 120,
  difficulty: "easy",
};
const sweet2 = {
  name: "Um Ali Sweet",
  instructions: "bake at 180C",
  prepTime: 120,
  difficulty: "Medium",
};
const chocoId = `6a4d0f622775ef6ef97da33a`;
const umAliId = `6a4d0f891d162c0c430e20cd`;
const newData = { name: `Date Cake` };

async function createNewRecepie(newRecipe) {
  try {
    const newerRecipe = await Recipe.create(newRecipe);
  } catch (err) {
    console.log("ERROR:", err);
  }
}

//createNewRecepie(sweet2);

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

async function getRecipeById(id) {
  try {
    const foundRecipe = await Recipe.findById(id);
    console.log(foundRecipe);
  } catch (err) {
    console.log("No recipe with this ID exists.");
  }
}
//getRecipeById(chocoId);

async function updateRecipeById(recipeId, newRecipeData) {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      newRecipeData,
      { new: true },
    );
    if (updatedRecipe) {
      console.log(updatedRecipe);
    } else {
      console.log("Recipe not found.");
    }
  } catch (err) {
    console.error("Cannot update recipe:", err);
  }
}

//updateRecipeById(chocoId, newData);

async function deleteRecipe(recipeId) {
  try {
    const deletedRecipie = await Recipe.findByIdAndDelete(recipeId);
  } catch (err) {
    console.log("Recipe successfully deleted.", err);
  }
}

//deleteRecipe(chocoId);

module.exports = {
  createNewRecepie,
  getAllTheRecepies,
  getRecipeById,
  updateRecipeById,
  deleteRecipe,
};
