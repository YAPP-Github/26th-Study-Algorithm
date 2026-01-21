// 7m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let [N, ... rest] = fs.readFileSync(filePath).toString().trim().split('\n');

let dancing_Arr = new Set();
N = Number(N);
dancing_Arr.add('ChongChong');

for(let i =0; i < N; i++){
    let [p1, p2] = rest[i].split(' ');

    if(dancing_Arr.has(p1) || dancing_Arr.has(p2)){
        dancing_Arr.add(p1);
        dancing_Arr.add(p2);
    }
}

console.log(dancing_Arr.size);