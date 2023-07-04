const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/products/list', controller.staffController.getProductsListPage);
route.get('/products/create', controller.staffController.getProductsCreatePage);
route.get('/products/update', controller.staffController.getProductsUpdatePage);
route.get('/products/remove', controller.staffController.getProductsRemovePage);

route.get('/', controller.staffController.getPage);

module.exports = route;