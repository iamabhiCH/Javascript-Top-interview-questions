//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function convertToTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Example usage
  const inputString = "abhishek yadav";
  const titleCaseString = convertToTitleCase(inputString);
  console.log(titleCaseString);   