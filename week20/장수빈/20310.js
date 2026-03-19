// 실버 3. 타노스
// https://www.acmicpc.net/problem/20310

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[0].split("").map(Number);

let zeroCnt = 0;
let oneCnt = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) zeroCnt++;
  else oneCnt++;
}

// 제거할 0과 1의 수
let removeZero = zeroCnt / 2;
let removeOne = oneCnt / 2;

// 0은 뒤에서부터 제거
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === 0 && removeZero > 0) {
    arr[i] = "";
    removeZero--;
  }
}

// 1은 앞에서부터 제거
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1 && removeOne > 0) {
    arr[i] = "";
    removeOne--;
  }
}

console.log(arr.join(""));
