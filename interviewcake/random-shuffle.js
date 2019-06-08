function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(theArray) {

  // Shuffle the input in place
  //const newArray = new Array(theArray.length);
  for(let i = 0; i < theArray.length; i++) {
    const randIndex = getRandom(i, theArray.length - 1)
    const tempValue = theArray[i]
    theArray[i] = theArray[randIndex]
    theArray[randIndex] = tempValue
  }
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);