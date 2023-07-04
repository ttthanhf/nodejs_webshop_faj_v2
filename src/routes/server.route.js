const route = require("./routes.js");

const AuthMiddleware = require('../middlewares/middlewares.js').AuthMiddleware;

module.exports = function (app) {
    app.use(AuthMiddleware.loginIn);

    app.use('/staff', AuthMiddleware.staffRequired, route.staffRoute);
    app.use('/api', route.apiRoute);

    app.use('/', route.productsRoute);
    app.use('/', route.authRoute);
    app.use('/', route.indexRoute);
    app.use('/', route.cartRoute);

    app.use((req, res, next) => {
        res.status(404).render('404', { layout: 'blank' });
    })
}