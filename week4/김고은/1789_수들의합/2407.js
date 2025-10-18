const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const S = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;
let idx = 1;

while(1) {
    sum += idx;
    if(sum >= S) break;
    idx++;
}

if(sum > S) console.log(idx -1)
else console.log(idx)
