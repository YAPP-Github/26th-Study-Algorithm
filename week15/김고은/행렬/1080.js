const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 그리디 (뒤집는 순서를 중요하지 않음) 
const [N, M] = input[0].split(' ').map(Number);

let arr_A = [];
let arr_B = [];

for(let i = 1; i <= N; i++){
    arr_A.push(input[i].split('').map(Number));
    arr_B.push(input[i+N].split('').map(Number));
}

let count = 0;

function flip (a,b) {
    for(let i =a; i < a+3; i++){
        for(let j =b; j < b+3; j++){
            arr_A[i][j] = arr_A[i][j] === 0? 1: 0;
        }
    }
}

for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= M - 3; j++) {
    if (arr_A[i][j] !== arr_B[i][j]) {
      flip(i, j);
      count++;
    }
  }
}

let flag = true;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr_A[i][j] !== arr_B[i][j]) {
            flag = false
        }
    }
}

console.log(flag? count: -1)

