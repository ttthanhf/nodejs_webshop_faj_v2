var bcrypt = require('bcrypt');

exports.generateHash = function (password) {
    var salt = bcrypt.genSaltSync(5);
    return bcrypt.hashSync(password, salt);
}
exports.verifyHash = function (password, hash) {
    return bcrypt.compareSync(password, hash);
}