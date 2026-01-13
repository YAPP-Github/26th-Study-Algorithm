const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let ans = -Infinity;

let initalSum = arr.slice(0, K).reduce((a, b) => a+b, 0);
ans = initalSum

for(let i =0; i < N - K ; i++){
    initalSum = initalSum + arr[i+K] - arr[i]; 
    
    if(initalSum > ans) ans = initalSum;
}

console.log(ans)