const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

// GET /api/foods (with optional search by name)
router.get("/", foodController.getAllFoods);

// POST /api/foods
router.post("/", foodController.createFood);

// PUT /api/foods/:id
router.put("/:id", foodController.updateFood);

// DELETE /api/foods/:id
router.delete("/:id", foodController.deleteFood);

module.exports = router;
