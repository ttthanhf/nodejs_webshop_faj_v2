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
            req.session.destroy();
            res.clearCookie("token");
            res.clearCookie();
            res.redirect('/');
        }
    }
    staffRequired(req, res, next) {
        try {
            if (req.session.user.isStaff) {
                next();
            }
            else {
                res.status(404).render('404', { layout: 'blank' });
            }
        } catch (e) {
            res.status(404).render('404', { layout: 'blank' });
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