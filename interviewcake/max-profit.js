function getMaxProfit(stockPrices) {
  
  if (stockPrices.length <= 1){
    throw "Bad args"
  }
  
  let maxProfit = Number.MIN_SAFE_INTEGER;
  let sell = Number.MIN_SAFE_INTEGER;
  let buy = Number.MAX_SAFE_INTEGER;

  // Calculate the max profit
  for(let i = stockPrices.length - 1; i >= 1; i--) {
    // console.log(buy + ' ' + sell);
    if (stockPrices[i] > sell) {
      sell = stockPrices[i]
      buy = stockPrices[i-1]
    } else if (stockPrices[i-1] < buy) {
      buy = stockPrices[i-1]
    }
    
    if (sell - buy > maxProfit) {
      maxProfit = sell - buy;
    }
    
  }

  return maxProfit;
}









// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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