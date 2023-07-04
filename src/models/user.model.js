const { query } = require('express');

const mysql = require('../configs/configs.js').mysqlConfig;

const generateRandomNumber = require('../utils/generateId.js');

class UserModel {
    getUserByUsernameAndPassword(username, password, callback) {
        const sql = 'SELECT * FROM users WHERE username = ? AND password = ?'
        mysql.query(sql, [username, password], (err, result) => {
            callback(result);
        })
    }
    getUserByUsername(username, callback) {
        const sql = 'SELECT * FROM users WHERE username = ?'
        mysql.query(sql, [username], (err, result) => {
            callback(result);
        })
    }
    createUser(username, password) {
        const sql = 'INSERT INTO users (id, username, password, role) VALUES (?, ?, ?, ?)'
        mysql.query(sql, [username], (err, result) => {
            callback(result);
        })
    }
}

module.exports = new UserModel;