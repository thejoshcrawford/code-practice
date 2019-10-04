'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {

    let maxArr = [];

    for(let i = 0; i < arr.length; i++) {

        maxArr[i] = arr[i]

        if (i - 1 >= 0 && maxArr[i-1] > maxArr[i]) {
            maxArr[i] = maxArr[i-1]
        }

        if (i - 2 >= 0 && maxArr[i-2] + arr[i] > maxArr[i]) {
            console.log(i, arr[i], maxArr[i-1], maxArr[i-2])
            maxArr[i] = maxArr[i-2] + arr[i]
        }
        
        // console.log(maxArr)
    }

    return maxArr[maxArr.length - 1]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = maxSubsetSum(arr);

    ws.write(res + '\n');

    ws.end();
}
