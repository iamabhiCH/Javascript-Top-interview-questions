// Write a JavaScript function to calculate the sum of two numbers.  

const prompt  = require('prompt-sync')();

let n1 = parseInt(prompt("Enter first number : "));
let n2 = parseInt(prompt("Enter second number: "));

function sumOfTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(sumOfTwoNumbers(n1,n2));
