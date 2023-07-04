const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/fruits', controller.productsController.getFruitsPage)
route.get('/juices', controller.productsController.getJuicesPage)

module.exports = route;