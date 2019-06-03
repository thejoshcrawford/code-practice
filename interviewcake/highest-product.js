function highestProductOf3(arrayOfInts) {
  
  if (arrayOfInts.length < 3) throw "Invalid args"

  // setup
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highest = arrayOfInts[0] > arrayOfInts[1] ? arrayOfInts[0] : arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowest = arrayOfInts[0] < arrayOfInts[1] ? arrayOfInts[0] : arrayOfInts[1];
  
  // console.log('h3 ' + highestProductOf3)
  //   console.log('h2 ' + highestProductOf2)
  //   console.log('h ' + highest)
  //   console.log('l2 ' + lowestProductOf2)
  //   console.log('l ' + lowest)
  
  for(let i = 2; i < arrayOfInts.length; i++) {
    if (highestProductOf2 * arrayOfInts[i] > highestProductOf3) {
      highestProductOf3 = highestProductOf2 * arrayOfInts[i];
    }
    
    if (lowestProductOf2 * arrayOfInts[i] > highestProductOf3) {
      highestProductOf3 = lowestProductOf2 * arrayOfInts[i];
    }
    
    if (highest * arrayOfInts[i] > highestProductOf2) {
      highestProductOf2 = highest * arrayOfInts[i];
    }
    
    if (lowest * arrayOfInts[i] > highestProductOf2) {
      highestProductOf2 = lowest * arrayOfInts[i];
    }
    
    if (lowest * arrayOfInts[i] < lowestProductOf2) {
      lowestProductOf2 = lowest * arrayOfInts[i];
    }
    
    if (highest * arrayOfInts[i] < lowestProductOf2) {
      lowestProductOf2 = highest * arrayOfInts[i];
    }
      
    if (arrayOfInts[i] > highest) {
        highest = arrayOfInts[i];
    }
    
    if (arrayOfInts[i] < lowest) {
        lowest = arrayOfInts[i];
    }
    
    // console.log('h3 ' + highestProductOf3)
    // console.log('h2 ' + highestProductOf2)
    // console.log('h ' + highest)
    // console.log('l2 ' + lowestProductOf2)
    // console.log('l ' + lowest)
    
  }

  return highestProductOf3;
}


















// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}