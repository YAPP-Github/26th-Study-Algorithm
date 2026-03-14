const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

let num = 1; 
let idx = 0;

while(input > num) {
    num += 6 * idx;

    if(input > num) idx++;
    else break;
}

console.log(idx+1)