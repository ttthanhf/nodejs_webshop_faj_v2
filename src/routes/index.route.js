const controller = require('../controllers/controllers.js')

const route = require('express').Router();

const AuthMiddleware = require('../middlewares/middlewares.js').AuthMiddleware;

route.get('/fruits', controller.productsController.getFruitsPage)
route.get('/juices', controller.productsController.getJuicesPage)
route.get('/about', controller.indexController.getAboutPage)
route.get('/contact', controller.indexController.getContactPage)
route.get('/sales', controller.indexController.getSalesPage)
route.get('/topseller', controller.indexController.getTopsellerPage)
route.get('/logout', AuthMiddleware.logout);

route.get('/', controller.indexController.getIndexPage)

module.exports = route;