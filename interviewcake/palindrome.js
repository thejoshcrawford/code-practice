function hasPalindromePermutation(theString) {
  if (theString.length <= 1) {
    return true;
  }

  // Check if any permutation of the input is a palindrome
  // let stringMap = {};
  // for (let letter in theString) {
  //   if (!stringMap[theString[letter]]) {
  //     stringMap[theString[letter]] = 1;
  //   } else {
  //     stringMap[theString[letter]]++;
  //   }
  // }
  
  // let isOneOdd = false;
  // for (let key in stringMap) {
  //   if (stringMap[key] % 2 !== 0 && isOneOdd) {
  //     return false
  //   } else if (stringMap[key] % 2 !== 0) {
  //     isOneOdd = true;
  //   }
  // }
  
  const oddLetters = new Set();
  
  for (let letter of theString) {
    if (oddLetters.has(letter)) {
      oddLetters.delete(letter);
    } else {
      oddLetters.add(letter);
    }
    // console.log(letter);
    // console.log(oddLetters);
  }
  
  return oddLetters.size <= 1;
}



