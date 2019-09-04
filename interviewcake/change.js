function changePossibilities(amount, denominations) {
  
    const waysOfMakingNCents = new Array(amount + 1).fill(0)
    waysOfMakingNCents[0] = 1 // base case, there is one way to make zero cents
    
    denominations.forEach(coinAmount => {
      
      for (let centsAmount = coinAmount; centsAmount <= amount; centsAmount++) {
        
        waysOfMakingNCents[centsAmount] += waysOfMakingNCents[centsAmount - coinAmount]
        
      }
      //console.log(waysOfMakingNCents)
      
    })
  
    return waysOfMakingNCents[amount];
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  // let desc = 'sample input';
  // let actual = changePossibilities(4, [1, 2, 3]);
  // let expected = 4;
  // assertEqual(actual, expected, desc);
  
  let desc = 'sample input';
  let actual = changePossibilities(4, [1, 2, 3]);
  let expected = 4;
  assertEqual(actual, expected, desc);
  
  desc = 'one way to make zero cents';
  actual = changePossibilities(0, [1, 2]);
  expected = 1; // I disagree
  assertEqual(actual, expected, desc);
  
  desc = 'no ways if no coins';
  actual = changePossibilities(1, []);
  expected = 0;
  assertEqual(actual, expected, desc);
  
  desc = 'big coin value';
  actual = changePossibilities(5, [25, 50]);
  expected = 0;
  assertEqual(actual, expected, desc);
  
  desc = 'big target amount';
  actual = changePossibilities(50, [5, 10]);
  expected = 6;
  assertEqual(actual, expected, desc);
  
  desc = 'change for one dollar';
  actual = changePossibilities(100, [1, 5, 10, 25, 50]);
  expected = 292;
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
  }