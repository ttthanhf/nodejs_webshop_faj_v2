const route = require("./routes.js");

const AuthMiddleware = require('../middlewares/middlewares.js').AuthMiddleware;

module.exports = function (app) {
    app.use(AuthMiddleware.loginIn);

    app.use('/staff', AuthMiddleware.staffRequired, route.staffRoute);

    app.use('/cart', AuthMiddleware.loginRequired, route.cartRoute);

    app.use('/user', AuthMiddleware.loginRequired, route.userRoute);

    app.use('/api', route.apiRoute);

    app.use('/', route.authRoute);
    app.use('/', route.indexRoute);

    app.use((req, res, next) => {
        res.status(404).render('404', { layout: 'blank' });
    })
}