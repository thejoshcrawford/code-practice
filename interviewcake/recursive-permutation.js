function getPermutations(string) {
  
  if (!string || !string.length) { 
    return new Set(['']) 
  }

  // Generate all permutations of the input string
  if (string.length === 1) {
    return new Set(string[0]);
  }
  
  let subSet = getPermutations(string.slice(0,-1))
  let lastLetter = string.slice(-1); // last char
  
  console.log(subSet)
  console.log('lastLetter: ' + lastLetter)
  
  let combinedSet = new Set()
  subSet.forEach(perm => {
    
    for (let i = 0; i <= perm.length; i++) {
      
      const newPerm = [perm.slice(0,i), lastLetter, perm.slice(i)].join('')
      combinedSet.add(newPerm)
    }
    
  })
  
  return combinedSet
}


















// Tests

let desc = 'empty string';
let input = '';
let actual = getPermutations(input);
let expected = new Set(['']);
assert(isSetsEqual(actual, expected), desc);

desc = 'one character string';
input = 'a';
actual = getPermutations(input);
expected = new Set(['a']);
assert(isSetsEqual(actual, expected), desc);

desc = 'two character string';
input = 'ab';
actual = getPermutations(input);
expected = new Set(['ab', 'ba']);
assert(isSetsEqual(actual, expected), desc);

desc = 'three character string';
input = 'abc';
actual = getPermutations(input);
expected = new Set(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}