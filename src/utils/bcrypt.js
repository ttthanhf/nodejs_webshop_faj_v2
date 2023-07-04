var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(5);

exports.generateHash = function (password) {
    return bcrypt.hashSync(password, salt);
}
exports.verifyHash = function (password, hash) {
    return bcrypt.compareSync(password, hash);
}