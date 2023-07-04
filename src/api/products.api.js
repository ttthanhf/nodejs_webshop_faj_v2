const productsModel = require('../models/models.js').productsModel;

const MSG_PRODUCTS_NOT_EXITS = 'Products not exist !'
const MSG_SUCCESS = 'success'
const MSG_MISSING_PRODUCTS_ID = 'Missing id products ! Try Again'

class ProductsApiController {
    getProducts(req, res) {
        if (!(req.query.type && req.query.search)) {
            productsModel.getProducts(result => {
                res.json(result);
            });
            return;
        }
        if (req.query.type == 'id') {
            productsModel.getProductsById(req.query.search, result => {
                res.json(result);
            });
        } else if (req.query.type == 'title') {
            productsModel.getProductsByTitle(req.query.search, result => {
                res.json(result);
            });
        }
    }
    createProducts(req, res) {
        let data = {
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            saleprice: req.body.saleprice || null,
            quantity: req.body.quantity || null,
            category: req.body.category,
            topseller: req.body.topseller || null,
            nameImg: req.body.nameImg
        }
        if (!parseInt(data.price)) {
            res.json({ status: 'Price wrong format (Number Only)' });
            return;
        }
        if (data.quantity != null && !parseInt(data.quantity)) {
            res.json({ status: 'Quantity wrong format (Number Only)' });
            return;
        }
        if (!(data.id && data.title && data.price && data.category && data.nameImg)) {
            res.json({ status: 'Missing requirement Input ! Try Again' });
            return;
        }
        productsModel.getProductsById(data.id, result => {
            if (result) {
                productsModel.createProducts(data);
                res.json({ status: MSG_SUCCESS })
            }
            else {
                res.json({ status: 'Products exist !' })
            }
        })
    }
    updateProducts(req, res) {
        let data = {
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            saleprice: req.body.saleprice || null,
            quantity: req.body.quantity || null,
            category: req.body.category,
            topseller: req.body.topseller || null,
            nameImg: req.body.nameImg
        }
        if (!data.id) {
            res.json({ status: MSG_MISSING_PRODUCTS_ID });
            return;
        }
        productsModel.getProductsById(data.id, result => {
            if (result) {
                productsModel.updateProducts(data);
                res.json({ status: MSG_SUCCESS })
            }
            else {
                res.json({ status: MSG_PRODUCTS_NOT_EXITS })
            }
        })
    }
    removeProducts(req, res) {
        let id = req.body.id;
        if (!id) {
            res.json({ status: MSG_MISSING_PRODUCTS_ID });
            return;
        }
        productsModel.getProductsById(id, result => {
            if (result) {
                productsModel.removeProduct(id);
                res.json({ status: MSG_SUCCESS })
            }
            else {
                res.json({ status: MSG_PRODUCTS_NOT_EXITS });
            }
        })
    }
    getSalesProducts(req, res) {
        let limit = req.query.limit;
        productsModel.getSaleProducts(limit, result => {
            res.json(result)
        })
    }
    getTopSellerProducts(req, res) {
        let limit = req.query.limit;
        productsModel.getTopSellerProducts(limit, result => {
            res.json(result)
        })
    }
    getFruits(req, res) {
        let limit = req.query.limit;
        if (!(req.query.search)) {
            productsModel.getFruits(limit, result => {
                res.json(result)
            })
            return;
        }
        productsModel.getFruitsByTitle(req.query.search, result => {
            res.json(result);
        });
    }
    getJuices(req, res) {
        let limit = req.query.limit;
        if (!(req.query.search)) {
            productsModel.getJuices(limit, result => {
                res.json(result)
            })
            return;
        }
        productsModel.getJuicesByTitle(req.query.search, result => {
            res.json(result);
        });
    }
}

module.exports = new ProductsApiController;