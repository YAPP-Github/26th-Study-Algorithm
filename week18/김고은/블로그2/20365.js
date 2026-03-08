// 20M
// 문자열 + 단순 반복문 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, arr] = fs.readFileSync(filePath).toString().trim().split('\n')

let colors = [];
colors = arr.split('');

let paintBlueAfter = 1;
let paintRedAfter = 1;

let splitedByRed = arr.split('R');
let splitedByBlue = arr.split('B');


for(let i = 0; i < splitedByRed.length; i++){
    if(splitedByRed[i] === '') continue;
    else paintBlueAfter++;
}

for(let i = 0; i < splitedByBlue.length; i++){
    if(splitedByBlue[i] === '') continue;
    else paintRedAfter++;
}

console.log(paintBlueAfter > paintRedAfter? paintRedAfter: paintBlueAfter )
