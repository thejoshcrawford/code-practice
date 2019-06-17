function findRepeat(numbers) {

  // Find a number that appears more than once
  let floor = 1
  let ceiling = numbers.length - 1;
  let middle = Math.floor((ceiling + floor) / 2)
  
  while (floor < ceiling) {
    let count = 0;
    numbers.forEach(number => {
      if (number >= floor && number <= middle) {
        count++;
      }
    });
    
    if (count > (middle - floor + 1)) { 
      // its in the bottom half 
      ceiling = middle;
      middle = Math.floor((ceiling + floor) / 2)
    } else {
      // its in the top half
      floor = middle + 1;
      middle = Math.floor((ceiling + floor) / 2)
    }
    
    
  }

  return floor;
}


















// Tests

let desc = 'just the repeated number';
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}