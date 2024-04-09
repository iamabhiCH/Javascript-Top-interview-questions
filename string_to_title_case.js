function convertToTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  // Example usage
  const inputString = "abhishek yadav";
  const titleCaseString = convertToTitleCase(inputString);
  console.log(titleCaseString);   