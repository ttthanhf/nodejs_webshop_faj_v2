const controller = require('../controllers/controllers.js')

const route = require('express').Router();

route.get('/', controller.userController.getUserPage)

module.exports = route;