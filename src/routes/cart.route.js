const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/', controller.cartController.getCartPage)
route.get('/checkout', controller.cartController.checkout)

route.get('/get', controller.cartController.getCart)
route.post('/add/:idProducts', controller.cartController.add)
route.post('/set/:idProducts/:value', controller.cartController.set)
route.post('/remove/:idProducts', controller.cartController.remove)

module.exports = route;