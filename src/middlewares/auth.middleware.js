const jwt = require('../utils/jsonwebtoken.js');

class AuthMiddleware {
    logout(req, res, next) {
        req.session.destroy();
        res.clearCookie("token");
        res.clearCookie();
        res.redirect('/');
    }
    loginRequired(req, res, next) {
        try {
            let userData = jwt.verifyToken(req.cookies.token);
            req.session.user = userData
            next();
        }
        catch (e) {
            this.logout(req, res, next);
        }
    }
    staffRequired(req, res, next) {
        try {
            if (req.session.user.isStaff) {
                next();
            }
            else {
                res.sendStatus(404);
            }
        } catch (e) {
            res.sendStatus(404);
        }

    }
    loginIn(req, res, next) {
        try {
            let userData = jwt.verifyToken(req.cookies.token);
            req.session.user = userData
            res.locals.user = req.session.user || null; //set global variable to handlebar
            next();
        }
        catch (e) { next(); }
    }
}
module.exports = new AuthMiddleware;