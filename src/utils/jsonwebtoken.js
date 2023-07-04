require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = function (data) {
    return jwt.sign(data, process.env.JWT_ACCESS_TOKEN_SECRET, {
        // expiresIn: '30s'
    })
}

exports.verifyToken = function (token) {
    return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
}
