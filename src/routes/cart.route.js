const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/', controller.cartController.getCartPage)

module.exports = route;