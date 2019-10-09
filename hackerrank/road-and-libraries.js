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

    let visitedCities = new Set()

    // calcuate road cycles
    let cycles = 0

    // calculate unconnected systems
    let systems = 0

    // traverse each node not visited
    for(let i = 0; i < cities.length; i++) {
        
        if (visitedCities.has(cities[i][0])) {
            continue;
        }

        let stack = [cities[i][0]]
        systems++

        while (stack.length > 0) {
            const city = stack.pop()
            // console.log(city)
            // console.log(visitedCities)
            if (visitedCities.has(city)) {
                cycles++
            } else {
                visitedCities.add(city)
            
                // push connected cities
                for(let j = 0; j < cities.length; j++) {
                    // the node is the city and the other node has not been visited 
                     console.log(n, j, cities[j])
                    // console.log(visitedCities)
                    if (cities[j][0] == city && !visitedCities.has(cities[j][1])) {
                        stack.push(cities[j][1])
                    }

                    if (cities[j][1] == city && !visitedCities.has(cities[j][0])) {
                        stack.push(cities[j][0])
                    }
                }
            }
        }
    }

    // console.log(n)
    // console.log(cycle)
    // // console.log(c_road)
    // console.log(systems)
    // console.log(c_lib)
    return (cities.length - cycles) * c_road + (n - visitedCities.size + systems) * c_lib
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
