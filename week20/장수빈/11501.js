// 실버 2. 주식
// https://www.acmicpc.net/problem/11501

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const prices = input[idx++].split(" ").map(Number);

  let maxStock = 0;
  let maxProfit = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (maxStock < prices[i]) maxStock = prices[i];
    else {
      maxProfit += maxStock - prices[i];
    }
  }

  console.log(maxProfit);
}
