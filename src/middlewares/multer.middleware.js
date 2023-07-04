const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, 'src/public/img/products');
    },
    filename: (req, file, callback) => {
        callback(null, req.body.nameImg + '.jpeg' || file.originalname);
    }
});

exports.upload = multer({
    storage: storage
});