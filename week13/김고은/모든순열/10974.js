// 10m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

let visited = Array.from({length : N +1}).fill(false);
let temp = [];

function recursion (idx) {
    if(idx == N){
        console.log(...temp)
        return;
    }

    for(let i = 1; i <= N; i++){
        if(visited[i]) continue;
        temp.push(i);
        visited[i] = true;
        recursion(idx+1);
        temp.pop();
        visited[i] = false;
    }
}

recursion(0);
