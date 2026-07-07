const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 100,
      trim: true,
    },
    instructions: {
      type: [String],
      minLength: 5,
      maxLength: 500,
      required: true,
    },

    prepTime: {
      type: Number,
    },
    difficulty: {
      type: [String],
    },
    timestamps: {
      type: [String],
      enum: ["Easy", "Medium", "Hard"],
    },
  },
  { timestamps: true },
);
const Recipe = mongoose.model(`Recipe`, recipeSchema);
module.exports = Recipe;
