const cartModel = require('../models/models.js').cartModel;
class CartController {
    getCartPage(req, res) {
        res.render('./index/cart', { style: 'cart.css', script: 'cart.js' })
    }
    getCart(req, res) {
        cartModel.getAllProductsByUserId(req.session.user.id, result => {
            cartModel.getSumTotalPriceInCart(req.session.user.id, totalPrice => {
                cartModel.getCountProductsInCart(req.session.user.id, totalProducts => {
                    res.json({
                        data: result,
                        totalPrice,
                        totalProducts
                    });
                })
            })
        })
    }
    add(req, res) {
        cartModel.isProductsExistInCart(req.params.idProducts, req.session.user.id, (status) => {
            if (status) {
                cartModel.increaseQuantityProductsByOne(req.params.idProducts, req.session.user.id)
            }
            else {
                cartModel.insertToCart(req.params.idProducts, req.session.user.id)
            }
            res.end();
        })
    }
    set(req, res) {
        cartModel.setQuantityProducts(req.params.value, req.params.idProducts, req.session.user.id);
        res.end();
    }
    remove(req, res) {
        cartModel.deleteProducts(req.params.idProducts, req.session.user.id);
        res.end();
    }
}

module.exports = new CartController;