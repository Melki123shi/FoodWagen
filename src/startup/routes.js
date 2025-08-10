const express = require('express');
const foods = require('../routes/foods.js');
const error = require('../middleware/error.js');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/foods', foods);
    app.use(error);
}