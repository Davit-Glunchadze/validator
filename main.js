var validator = require('validator');

const TrueEmail = validator.isEmail('test@test.com')
const falseEmail = validator.isEmail('abcDE123')

console.log(TrueEmail)// true

console.log(falseEmail)// false