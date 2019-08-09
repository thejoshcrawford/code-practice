function findDuplicate(intArray) {

  // Find a number that appears more than once ... in O(n) time
  headIndex = intArray.length;
  
  // get in the loop
  for (let i = 0; i <= intArray.length; i++) {
    //console.log(headIndex)
    headIndex = intArray[headIndex-1]
  }
  // console.log(headIndex)
  
  // find the loop length
  let tailIndex = headIndex;
  headIndex = intArray[headIndex-1]
  let loopLength = 1;
  for (let i = 0; i < intArray.length; i++) {
    if (tailIndex === headIndex) {
      break
    }
    
    headIndex = intArray[headIndex-1]
    loopLength++;
  }
  // console.log(loopLength)
  
  // get the start of the loop
  headIndex = intArray.length;
  for (let i = 0; i < loopLength; i++) {
    // console.log(headIndex)
    headIndex = intArray[headIndex-1]
  }
  tailIndex = intArray.length;
  console.log(headIndex)
  console.log(tailIndex)
  
  for (let i = 0; i < intArray.length; i++) {
    if (tailIndex === headIndex) {
      console.log(tailIndex)
      break
    }
    
    headIndex = intArray[headIndex-1]
    tailIndex = intArray[tailIndex-1]
  }

  return tailIndex;
}


















// Tests

let desc = 'just the repeated number';
let actual = findDuplicate([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findDuplicate([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findDuplicate([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}