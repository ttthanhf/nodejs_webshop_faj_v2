module.exports = function (app) {
    const path = require('path');
    const { engine } = require('express-handlebars');
    app.engine('hbs', engine());
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '/../resources/views'));
}