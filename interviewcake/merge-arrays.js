 function mergeArrays(myArray, alicesArray) {

 // Combine the sorted arrays into one large sorted array
  let merged = [];
  let myHead = 0;
  let aliceHead = 0;
  
  while (myHead < myArray.length || aliceHead < alicesArray.length) {
    // if (!myArray[myHead]) {
    //     merged.push(alicesArray[aliceHead]);
    //     aliceHead++;
    // }
    // else if (!alicesArray[aliceHead]) {
    //     merged.push(myArray[myHead]);
    //     myHead++;
    // }
    // else 
    if (!alicesArray[aliceHead] || (myArray[myHead] <= alicesArray[aliceHead])) {
        merged.push(myArray[myHead]);
        myHead++;
    } else {
        merged.push(alicesArray[aliceHead]);
        aliceHead++;
    }
  }
  
  return merged;
}




