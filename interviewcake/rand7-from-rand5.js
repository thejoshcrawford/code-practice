function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {

  // Implement rand7() using rand5()
  const results = [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7]
  ]
  
  const roll1 = rand5() -1
  const roll2 = rand5() -1
  
  if (roll1 > 1 || (roll1 === 1 && roll2 > 1)) {
    return rand7()
  }
  
  // console.log(roll1, roll2)
  return results[roll1][roll2];
}


for (let i = 0; i < 14; i++) {
  console.log(rand7());
}