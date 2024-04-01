const Calculator = require('../01-js/hard/calculator'); // Import the Calculator module
let calculator = new Calculator(); // Create a new Calculator instance
calculator.calculate('10 / 0'); // Call the calculate method with the expression

console.log(calculator.result);