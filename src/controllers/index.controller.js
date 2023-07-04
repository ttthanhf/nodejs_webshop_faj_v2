
class IndexController {
    getIndexPage(req, res) {
        res.render('./index/index', { style: 'index.css', script: 'index.js'})
    }
    getAboutPage(req, res) {
        res.render('./index/about', { style: 'about.css'})
    }
    getContactPage(req, res) {
        res.render('./index/contact', { style: 'contact.css'})
    }
    getSalesPage(req, res) {
        res.render('./index/sales', { style: 'products.css', script: 'products.js' })
    }
    getTopsellerPage(req, res) {
        res.render('./index/topseller', { style: 'products.css', script: 'products.js' })
    }
}

module.exports = new IndexController;