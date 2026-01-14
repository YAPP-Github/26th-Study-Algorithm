// 골드5. 회의실 배정
// https://www.acmicpc.net/problem/1931

// 1 <= n <= 10^5
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 그리디
// 작성한 코드의 알고리즘: O(NlogN)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

let meetings = [];
for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  meetings.push(arr);
}

// 끝나는 회의 시간을 기준으로 오름차순 정렬 : O(NlogN)
meetings.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

let maxCount = 0;
let lastEnd = 0;

// O(N)
for (let i = 0; i < n; i++) {
  const [start, end] = meetings[i];

  if (start >= lastEnd) {
    lastEnd = end;
    maxCount++;
  }
}

console.log(maxCount);
