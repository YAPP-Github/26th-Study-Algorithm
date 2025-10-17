const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, M ] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let n1 = 1n; // bigint 사용하기

for(let i = N; i > N-M; i--){
    n1 =  n1 * BigInt(i) / BigInt(N - i + 1)
}

console.log(n1.toString())