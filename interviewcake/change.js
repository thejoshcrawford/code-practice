let memo = {}

function changePossibilities(amountLeft, denominations) {
  let possibilities = 0;
  let denominationsLeft = denominations;
  
  if (amountLeft === 0) return  1
  // Calculate the number of ways to make change
  denominations.forEach(coin => {
    denominationsLeft = denominationsLeft.slice(1)
    let amountLeftForThisCoin = amountLeft
    while (amountLeftForThisCoin > 0) {
      // console.log('before - coin: ' + coin + ' left: ' + amountLeftForThisCoin , denominationsLeft)
      amountLeftForThisCoin -= coin
      //console.log('amount left: ' + amountLeftForThisCoin)
      if (amountLeftForThisCoin > 0) {
        
        const key = [amountLeftForThisCoin, ...denominationsLeft].join(',')
        // console.log(key)
        
        let newPoss = changePossibilities(amountLeftForThisCoin, denominationsLeft)
        if (memo[key]) {
          newPos = memo[key]
        } else {
          newPoss = changePossibilities(amountLeftForThisCoin, denominationsLeft)
          memo[key] = newPoss
        }
        possibilities += newPoss
        
        // let oldP = possibilities
        // possibilities += newPoss
        // console.log('possibilities for amount',
          // amountLeftForThisCoin, 'and coin(s)', denominationsLeft + 
          // ' is ' + (possibilities - oldP) )
      } else if (amountLeftForThisCoin === 0) {
       // console.log(amountLeft, denominations.slice(1))
        possibilities++;
        
      }
      // console.log('after - coin: ' + coin + ' left: ' + amountLeftForThisCoin , denominationsLeft)
    }
  })

  //console.log(possibilities)
  return possibilities;
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