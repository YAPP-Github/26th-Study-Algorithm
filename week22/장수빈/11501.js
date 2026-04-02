// 실버 2. 주식
// https://www.acmicpc.net/problem/11501

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const prices = input[idx++].split(" ").map(Number);

  let maxPrice = 0;
  let profit = 0;

  // 미래의 최댓값을 알아야 지금 사는게 이득인지 아닌지 판단 가능 -> 미래부터 탐색
  for (let i = N - 1; i >= 0; i--) {
    const curPrice = prices[i];

    // 1-1. 현재값이 최댓값보다 크면 최댓값 갱신
    if (maxPrice < curPrice) maxPrice = curPrice;
    // 1-2. 최댓값이 그대로 유지될 경우, 이익 계산
    else {
      profit += maxPrice - curPrice;
    }
  }

  console.log(profit);
}
