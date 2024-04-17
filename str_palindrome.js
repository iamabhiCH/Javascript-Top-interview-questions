/* 
     Write a JavaScript function to check if a given string is a palindrome 
*/

const str = "abhiihba";

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(str));
