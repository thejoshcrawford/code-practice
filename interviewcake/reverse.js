function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  if (arrayOfChars.length < 2) {
    return arrayOfChars;
  }

  for(let i = 0; i<arrayOfChars.length/2; i++) {
    let temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[arrayOfChars.length-1-i];
    arrayOfChars[arrayOfChars.length-1-i] = temp;
  }
  
  return arrayOfChars;
}
