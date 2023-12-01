const { query } = require('express');

const mysql = require('../configs/configs.js').mysqlConfig;

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
    getUserById(id, callback) {
        const sql = 'SELECT * FROM users WHERE id = ?'
        mysql.query(sql, [id], (err, result) => {
            callback(result);
        })
    }
    getAllUser() {
        const sql = 'SELECT * FROM users'
        mysql.query(sql, [id], (err, result) => {
            callback(result);
        })
    }
    createUser(username, password, callback) {
        const generateRandomNumber = require('../utils/generateId.js').generateRandomNumber(6);
        const sql = 'INSERT INTO users (id, username, password, role) VALUES (?, ?, ?, ?)'
        function create() {
            mysql.query(sql, [generateRandomNumber, username, password, 3], (err, result) => {
                if (err) {
                    create()
                }
            })
        }
        create()
    }
}

module.exports = new UserModel;