/**
 * 生成bcryptHash密码
 * @author BruceJiao
 */
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var hash = bcrypt.hashSync('jiaojianjun',salt);
console.log(hash);
