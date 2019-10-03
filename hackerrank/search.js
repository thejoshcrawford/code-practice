'use strict';

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

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    // brute force slightly optimized
    // for(let i = 0; i <= cost.length; i++) {
    //     for(let j = i + 1; j < cost.length; j++) {
            
    //         if (cost[i] + cost[j] === money) {
    //             console.log(i+1, j+1);
    //             return
    //         }


    //     }
    // }

    //hash map
    let values = {}

    for(let i = 0; i < cost.length; i++) {
        let valToMatch = money - cost[i]
        // console.log(valToMatch)
        // console.log(values)
        // console.log(values[valToMatch])
        if (values[valToMatch] >= 0){ 
            console.log(values[valToMatch]+1, i+1)
            return
        }
        values[cost[i]] = i;
    }

}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}
