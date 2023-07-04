const mysql = require('../configs/configs.js').mysqlConfig;

class ProductsModel {
    getProducts(callback) {
        const sql = 'SELECT * FROM products'
        mysql.query(sql, (err, result) => {
            callback(result);
        });
    }
    getProductsById(id, callback) {
        const sql = 'SELECT * FROM products WHERE id like ?';
        const searchTerm = id + '%';
        mysql.query(sql, [searchTerm], (err, result) => {
            callback(result);
        })
    }
    getProductsByTitle(title, callback) {
        const sql = 'SELECT * FROM products WHERE title like ?';
        const searchTerm = title + '%';
        mysql.query(sql, [searchTerm], (err, result) => {
            callback(result);
        })
    }
    getFruits(limit, callback) {
        let sql = 'SELECT * FROM products WHERE category = ?';
        if (limit) {
            sql += ` LIMIT ${limit}`
        }
        mysql.query(sql, ['fruit'], (err, result) => {
            callback(result);
        })
    }
    getFruitsByTitle(title, callback) {
        let sql = 'SELECT * FROM products WHERE category = ? AND title like ?';
        const searchTerm = title + '%';
        mysql.query(sql, ['fruit', searchTerm], (err, result) => {
            callback(result);
        })
    }
    getJuices(limit, callback) {
        let sql = 'SELECT * FROM products WHERE category = ?';
        if (limit) {
            sql += ` LIMIT ${limit}`
        }
        mysql.query(sql, ['juice'], (err, result) => {
            callback(result);
        })
    }
    getJuicesByTitle(title, callback) {
        let sql = 'SELECT * FROM products WHERE category = ? AND title like ?';
        const searchTerm = title + '%';
        mysql.query(sql, ['juice', searchTerm], (err, result) => {
            callback(result);
        })
    }
    getSaleProducts(limit, callback) {
        let sql = 'SELECT * FROM products WHERE saleprice IS NOT NULL';
        if (limit) {
            sql += ` LIMIT ${limit}`
        }
        mysql.query(sql, (err, result) => {
            callback(result);
        })
    }
    getTopSellerProducts(limit, callback) {
        let sql = 'SELECT * FROM products WHERE topseller IS NOT NULL';
        if (limit) {
            sql += ` LIMIT ${limit}`
        }
        mysql.query(sql, (err, result) => {
            callback(result);
        })
    }
    createProducts(data) {
        const { id, price, title, nameImg, quantity, topseller, saleprice, category } = data;
        const sql = 'INSERT INTO products(id, price, title, image, quantity, topseller, saleprice, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        mysql.query(sql, [id, price, title, nameImg, quantity, topseller, saleprice, category]);
    }
    updateProducts(data) {
        const { id, price, title, nameImg, quantity, topseller, saleprice, category } = data;
        let sql = 'UPDATE products SET ' +
            (price ? 'price = ?, ' : '') +
            (title ? 'title = ?, ' : '') +
            (nameImg ? 'image = ?, ' : '') +
            (quantity ? 'quantity = ?, ' : '') +
            (topseller ? 'topseller = ?, ' : '') +
            (saleprice ? 'saleprice = ?, ' : '') +
            (category ? 'category = ?, ' : '') +
            'WHERE id = ?';
        sql = sql.split("").reverse().join("").replace('\,', '');
        sql = sql.split("").reverse().join("");
        const params = [price, title, nameImg, quantity, topseller, saleprice, category, id].filter(param => param != null && param != undefined && param != '');
        mysql.query(sql, params);
    }
    removeProduct(id) {
        const sql = 'DELETE FROM products WHERE id = ?';
        mysql.query(sql, [id]);
    }
}

module.exports = new ProductsModel;