function isSingleRiffle(half1, half2, shuffledDeck) {

  // Check if the shuffled deck is a single riffle of the halves
  // if (shuffledDeck.length === 0) {
  //   return true;
  // }
  
  // if (shuffledDeck[0] === half1[0]) {
  //   return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1))
  // }
  
  // if (shuffledDeck[0] === half2[0]) {
  //   return isSingleRiffle(half1, half2.slice(1), shuffledDeck.slice(1))
  // }
  
  let half1Head = 0;
  let half2Head = 0;
  for(let i = 0; i < shuffledDeck.length; i++) {
    if (shuffledDeck[i] === half1[half1Head]) {
      half1Head++;
    } else if (shuffledDeck[i] === half2[half2Head]) {
      half2Head++;
    } else {
      return false;
    }
  }

  return true;
}


















// Tests

let desc = 'both halves are the same length';
let actual = isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'halves are different lengths';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one half is empty';
actual = isSingleRiffle([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'shuffled deck is missing cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'shuffled deck has extra cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}