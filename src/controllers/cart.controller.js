
const options = (css) => {
    return {
        style: css
    }
}

class CartController {
    getCartPage(req, res) {
        res.render('./index/cart', { style: 'index.css', script: 'index.js' })
    }

}

module.exports = new CartController;