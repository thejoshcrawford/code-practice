function contains(array, value) {
  if (array.length === 0) {
    return false
  }

  // Check if an integer is present in the array
  let start = -1
  let end = array.length
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2)
    
    if (value === array[mid]) return true
    
    if (value < array[mid]) {
      end = mid
    } else {
      start = mid
    }
  }

  // if (value < array[start] || value > array[end]) {
      return false
  // } 
  // return true
}


















// Tests

let desc = 'empty array';
let actual = contains([], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'one item array, number present';
actual = contains([1], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one item array, number absent';
actual = contains([1], 2);
expected = false;
assertEquals(actual, expected, desc);

desc = 'small array, number present';
actual = contains([2, 4, 6], 4);
expected = true;
assertEquals(actual, expected, desc);

desc = 'small array, number absent';
actual = contains([2, 4, 6], 5);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number present';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number absent';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number first';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number last';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
expected = true;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}