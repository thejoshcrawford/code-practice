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

// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
    // if library is cheaper than a road just build libraries
    if (c_lib <= c_road) {
        return c_lib * n
    }

    // build a better graph
    const cityList = []
    for(let i = 1; i <= n; i++) { 
        cityList[i] = []
    }

    for(let i = 0; i < cities.length; i++) {
        cityList[cities[i][0]].push(cities[i][1]) 
        cityList[cities[i][1]].push(cities[i][0]) 
    }

    let cost = 0
    const visitedCities = []

    // traverse each node not visited
    for(let i = 1; i <= n; i++) {
        
        // if we have visited the city group
        if (visitedCities[i]) {
            continue;
        }

        cost += c_lib

        const stack = [i]
        while (stack.length > 0) {
            const city = stack.pop()

            visitedCities[city] = true

            const connectedCities = cityList[city]
            for(let j = 0; j < connectedCities.length; j++){
                if (visitedCities[connectedCities[j]]) {
                    continue;
                }
                stack.push(connectedCities[j])
                visitedCities[connectedCities[j]] = true
                cost += c_road
            }
        }
    }

    return cost
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nmC_libC_road = readLine().split(' ');

        const n = parseInt(nmC_libC_road[0], 10);

        const m = parseInt(nmC_libC_road[1], 10);

        const c_lib = parseInt(nmC_libC_road[2], 10);

        const c_road = parseInt(nmC_libC_road[3], 10);

        let cities = Array(m);

        for (let i = 0; i < m; i++) {
            cities[i] = readLine().split(' ').map(citiesTemp => parseInt(citiesTemp, 10));
        }

        const result = roadsAndLibraries(n, c_lib, c_road, cities);

        ws.write(result + '\n');
    }

    ws.end();
}
