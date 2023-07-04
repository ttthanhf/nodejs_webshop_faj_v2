const api = require('../api/apis.js');
const multer = require('../middlewares/middlewares.js').MulterMiddleware;

const route = require('express').Router();

route.get('/products/list', api.productsAPI.getProducts);
route.get('/products/fruits', api.productsAPI.getFruits);
route.get('/products/juices', api.productsAPI.getJuices);
route.get('/products/sales', api.productsAPI.getSalesProducts);
route.get('/products/topseller', api.productsAPI.getTopSellerProducts);

route.post('/products/create', multer.upload.single('image'), api.productsAPI.createProducts);
route.post('/products/update', multer.upload.single('image'), api.productsAPI.updateProducts);
route.post('/products/remove', multer.upload.none(), api.productsAPI.removeProducts);


module.exports = route;