const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;
let arr = [];
let ans = [];

// 원형 -> 배열 (처음 - 마지막 연결) 
for(let i =1; i <= N; i++){
    arr.push(i);
}

while(arr.length > 0){
    for(let i = 1; i <= K; i ++){
        let popped = arr.shift();
        if(i === K ) ans.push(popped)
        else {
            arr.push(popped)
        }
    }
}

console.log("<"+ans.join(", ")+">")