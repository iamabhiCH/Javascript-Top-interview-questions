// Write a JavaScript program to calculate the factorial of a given number. 

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number to find factorial : "));

let res = 1;
for(let x = 1; x <= num; x++){
    res = res * x;
}

console.log("Factorial of ",num," is : ",res);
