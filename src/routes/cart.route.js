const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/cart', controller.cartController.getCartPage)

module.exports = route;