
const jwt = require('../utils/jsonwebtoken.js');
const userModel = require('../models/models.js').userModel;
const bcrypt = require('../utils/bcrypt.js');

class AuthController {
    getLogin(req, res) {
        res.render('./index/login', { style: 'auth.css', layout: 'blank' })
    }
    getRegister(req, res) {
        res.render('./index/register', { style: 'auth.css', layout: 'blank' })
    }
    handleLogin(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        if (!password || !username) {
            res.render('./index/login', { style: 'auth.css', layout: 'blank', error: 'Username or Password empty !' });
            return;
        }
        userModel.getUserByUsernameAndPassword(username, password, result => {
            if (result.length != 0) {
                let userData = {
                    id: result[0].id,
                    username: result[0].username,
                    isStaff: result[0].role < 3,
                    isManager: result[0].role < 2,
                    isAdmin: result[0].role < 1,
                }
                const token = jwt.generateToken(userData);
                res.cookie('token', token, {
                    httpOnly: true,
                    sameSite: true
                })
                req.session.user = userData
                res.redirect('/');
            }
            else {
                res.render('./index/login', { style: 'auth.css', layout: 'blank', error: 'Username or Password incorrect !' })
            }
        })
    }
    handleRegister(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let retypePassword = req.body.retypePassword;
        if (!password || !username || !retypePassword) {
            res.render('./index/login', { style: 'auth.css', layout: 'blank', error: 'Username or Password empty !' });
            return;
        }
        if (password != retypePassword) {
            res.render('./index/register', { style: 'auth.css', layout: 'blank', error: 'Passwords do not match' })
            return;
        }
        userModel.getUserByUsername(username, result => {
            if (result.length != 0) {
                let hashPassword = bcrypt.generateHash(password);
                userModel.createUser(username, hashPassword);
                res.render('./index/login', { style: 'auth.css', layout: 'blank', sucess: 'Register success !' })
            }
            else {
                res.render('./index/register', { style: 'auth.css', layout: 'blank', error: 'Username exist !' })
            }
        })
    }
}

module.exports = new AuthController;