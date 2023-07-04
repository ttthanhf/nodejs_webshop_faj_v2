
class StaffController {
    getPage(req, res) {
        res.render('./staff/staff', { layout: 'staff-layout' })
    }
    getProductsCreatePage(req, res) {
        res.render('./staff/products/products-create', { 'layout': 'staff-layout', 'script': 'staff-products-cur.js', 'style': "staff-products-cur.css" })
    }
    getProductsUpdatePage(req, res) {
        res.render('./staff/products/products-update', { 'layout': 'staff-layout', 'script': 'staff-products-cur.js', 'style': "staff-products-cur.css" })
    }
    getProductsRemovePage(req, res) {
        res.render('./staff/products/products-remove', { 'layout': 'staff-layout', 'script': 'staff-products-cur.js', 'style': "staff-products-cur.css" })
    }
    getProductsListPage(req, res) {
        res.render('./staff/products/products-list', { 'layout': 'staff-layout', 'script': 'staff-products-list.js', 'style': "staff-products-list.css"})
    }
}

module.exports = new StaffController;