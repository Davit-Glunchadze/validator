
// მოახდინე პროექტის ინიციალიზაცია
// ● დააინსტალირე პაკეტი validator
// ● მოიძიე validator-ის დოკუმენტაცია
// npmjs.com - ზე
// ● დოკუმენტაციის მიხედვით გამოიყენე
// ბრძანება isEmail და დაბეჭდე არის თუ არა
// შემდეგი სიტყვები მეილი:
// ● test@test.com, abcDE123


var validator = require('validator');

const TrueEmail = validator.isEmail('test@test.com')
const falseEmail = validator.isEmail('abcDE123')

console.log(TrueEmail)// true

console.log(falseEmail)// false