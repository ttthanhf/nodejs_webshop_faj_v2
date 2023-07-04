require('dotenv').config({ path: '.env' });

module.exports = function (app) {
    const session = require('express-session');
    app.use(session({
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_ACCESS_TOKEN_SECRET,
        cookie: { maxAge: 60000 }
    }));
}

