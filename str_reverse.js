// WAP to reverse thr given string.

const str = "Hello, I am Abhishek Yadav";

function  reverseString(str) {
    const revStr = str.split('').reverse().join('');
    return revStr;
}

console.log(reverseString(str));
