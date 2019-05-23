function processData(input) {
    const regex = /(\/\*[\s\S]*?\*\/|\/\/.*\n)/g;
    const found = input.match(regex);

    const spaceKiller = /\n\s*/g;
    for (let line of found) {
        console.log(line.trim().replace(spaceKiller, '\n'));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
