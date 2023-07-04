const controller = require('../controllers/controllers.js')

const route = require('express').Router();

const AuthMiddleware = require('../middlewares/middlewares.js').AuthMiddleware;

route.get('/cart', AuthMiddleware.loginRequired, controller.cartController.getCartPage)

module.exports = route;