const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/login', controller.authController.getLogin)
route.get('/register', controller.authController.getRegister)

route.post('/login', controller.authController.handleLogin)
route.post('/register', controller.authController.handleRegister)

module.exports = route;