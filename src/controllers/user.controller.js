class UserController {
    getUserPage(req, res) {
        res.render('./index/user', { style: 'index.css', script: 'index.js' })
    }

}

module.exports = new UserController;