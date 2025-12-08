// 30804. 과일 탕후루
// https://www.acmicpc.net/problem/30804

// 1 <= N <= 200,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 슬라이딩 윈도우
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const cnt = Array(10).fill(0);

let left = 0;
let kinds = 0; // 현재 구간 안의 과일 종류 수
let answer = 0;

for (let right = 0; right < N; right++) {
  const fruit = arr[right];

  // 새로 등장한 과일 종류
  if (cnt[fruit] === 0) {
    kinds++;
  }
  cnt[fruit]++;

  // 과일 종류가 3종류 이상이면, 왼쪽 포인터를 줄여서 다시 2종류 이하로 생성
  while (kinds > 2) {
    const leftFruit = arr[left];
    cnt[leftFruit]--;
    if (cnt[leftFruit] === 0) {
      kinds--; // 이 종류는 더 이상 구간에 없음
    }
    left++;
  }

  // [left, right] 구간은 지금 과일 종류가 최대 2개
  const length = right - left + 1;
  answer = Math.max(answer, length);
}

console.log(answer);
