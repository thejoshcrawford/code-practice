function findRotationPoint(words) {
  if (words.length < 2) {
    throw "Invalid args"
  }
  
  let firstIndex = 0
  let lastIndex = words.length - 1

  // Find the rotation point in the vector
  while(lastIndex - firstIndex > 1) {
    const middleIndex = Math.floor((lastIndex + firstIndex) / 2)
    
    const firstWord = words[firstIndex]
    const middleWord = words[middleIndex]
    //const lastWord = word[lastIndex]
    if (firstWord.localeCompare(middleWord) < 0) {
      firstIndex = middleIndex
    } else {
      lastIndex = middleIndex
    }
    
  }

  // console.log(lastIndex)
  return lastIndex;
}


















// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}