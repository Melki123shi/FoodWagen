const { Food, validate } = require("../models/food");

// GET /api/foods
exports.getAllFoods = async (req, res) => {
  const query = {};
  if (req.query.name) {
    query.name = new RegExp(req.query.name, "i");
  }
  const foods = await Food.find(query);
  res.json(foods);
};

// POST /api/foods
exports.createFood = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const food = new Food(req.body);
  await food.save();
  res.status(201).json(food);
};

// PUT /api/foods/:id
exports.updateFood = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!food) return res.status(404).json({ message: "Food not found" });
  res.json(food);
};

// DELETE /api/foods/:id
exports.deleteFood = async (req, res) => {
  const food = await Food.findByIdAndDelete(req.params.id);
  if (!food) return res.status(404).json({ message: "Food not found" });
  res.json({ message: "Food deleted successfully" });
};
