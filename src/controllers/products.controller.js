class ProductsController {
    getFruitsPage(req, res) {
        res.render('./index/fruits', { style: 'products.css', script: 'products.js'})
    }
    getJuicesPage(req, res) {
        res.render('./index/juices', { style: 'products.css', script: 'products.js'})
    }
}

module.exports = new ProductsController;