// 실버 3. 주유소
// https://www.acmicpc.net/problem/13305

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const km = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);

let minCost = 1000000000;
let result = 0;

for (let i = 0; i < N - 1; i++) {
  // 최저가 발견했을 경우
  if (minCost > cost[i]) {
    minCost = cost[i]; // 최저가 갱신
    result += km[i] * minCost;
  } else {
    result += km[i] * minCost;
  }
}

console.log(result);
