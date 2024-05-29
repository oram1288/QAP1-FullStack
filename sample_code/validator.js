var validator = require("validator");

// Validating each one if true or false

// Email
console.log(validator.isEmail("cody@hotmail.com")); //=> true
console.log(validator.isEmail("cody&hotmail.com")); //=> false
console.log();

// Phone number
console.log(validator.isMobilePhone("18782998776", "zh-CN")); //=> true
console.log(validator.isMobilePhone("1-878-299-8776", "zh-CN")); //=> false
console.log();

// URL
console.log(validator.isURL("http:/www.leafs.com")); //=> false
console.log(validator.isURL("http://www.leafs.com")); //=> true
console.log();

// Lowercase
console.log(validator.isLowercase("toronto maple leafs")); //=> true
console.log(validator.isLowercase("toronto mAple leafs")); //=> false
console.log();

// Date
console.log(validator.isDate("2024-05-28")); //=> true
console.log(validator.isLowercase("05-28-2024")); //=> true
console.log();
