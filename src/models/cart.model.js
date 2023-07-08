const mysql = require('../configs/configs.js').mysqlConfig;

class CartModel {
    isProductsExistInCart(productsId, userId, callback) {
        const sql = 'SELECT * FROM carts WHERE productId = ? AND userId = ?'
        mysql.query(sql, [productsId, userId], (err, result) => {
            callback(result.length != 0);
        });
    }
    insertToCart(productsId, userId) {
        const generateRandomNumber = require('../utils/generateId.js').generateRandomNumber(9);
        const sql = 'INSERT INTO carts (id, userId, productId, quantity) VALUES (?, ?, ?, ?)'
        mysql.query(sql, [generateRandomNumber, userId, productsId, 1]);
    }
    setQuantityProducts(number, productsId, userId) {
        const sql = 'UPDATE carts SET quantity = ? WHERE productId = ? AND userId = ?'
        mysql.query(sql, [number, productsId, userId]);
    }
    increaseQuantityProductsByOne(productsId, userId) {
        const sql = 'UPDATE carts SET quantity = quantity + 1 WHERE productId = ? AND userId = ?'
        mysql.query(sql, [productsId, userId]);
    }
    deleteProducts(productsId, userId) {
        const sql = 'DELETE FROM carts WHERE productId = ? AND userId = ?'
        mysql.query(sql, [productsId, userId]);
    }
    getAllProductsByUserId(userId, callback) {
        const sql = 'SELECT productId, price, title, image, carts.quantity, saleprice FROM carts INNER JOIN products ON carts.productId = products.id WHERE carts.userId = ?'
        mysql.query(sql, [userId], (err, result) => {
            callback(result);
        });
    }
    getCountProductsInCart(userId, callback) {
        const sql = 'SELECT count(*) as totalProducts FROM carts WHERE userId = ?'
        mysql.query(sql, [userId], (err, result) => {
            callback(result[0] || 0);
        })
    }
    getSumTotalPriceInCart(userId, callback) {
        const sql = 'SELECT SUM(price * carts.quantity) as totalPrice FROM carts INNER JOIN products ON carts.productId = products.id WHERE carts.userId = ?'
        mysql.query(sql, [userId], (err, result) => {
            callback(result[0]);
        })
    }
}

module.exports = new CartModel;