// Write a JavaScript function to check if a given number is prime.

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter a number: "));

function isPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i = 2; i <= num/2; i++){
        if(num  % i == 0) {
            return false;
        }
    }
    return true;
}

if(isPrime(num)){
    console.log("Prime number");
}
else{
    console.log("Not a prime number.")
}