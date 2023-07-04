module.exports = function (app ,express) {
    const path = require('path');
    app.use(express.static(path.join(__dirname, '../public'))); //tạo foler tĩnh 
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}