const mongoose = require("mongoose");
const Joi = require("joi");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  restaurantName: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
  restaurantLogo: {
    type: String,
  },
  restaurantStatus: {
    type: String,
    enum: ["Open Now", "Closed"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

function validateFood(food) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    rating: Joi.number().min(0).max(5).required(),
    imageUrl: Joi.string().uri().optional(),
    restaurantName: Joi.string().min(1).max(100).required(),
    restaurantLogo: Joi.string().uri().optional(),
    restaurantStatus: Joi.string()
      .valid("Open Now", "Closed")
      .required(),
  });

  return schema.validate(food);
}

module.exports.Food = Food;
module.exports.validate = validateFood;
