function findRepeat(numbers) {

  // Find the number that appears twice
  const n = numbers.length - 1
  
  const triangularSum = (Math.pow(n, 2) + n) / 2
  
  let sum = 0
  for(const num of numbers) {
    // console.log(num)
    sum += num
  }

  return sum - triangularSum;
}


