// 실버 1. 신입 사원
// https://www.acmicpc.net/problem/1946

// 1 <= n <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 그리디 (서류 또는 면접 순위 기준으로 오름차순 정렬 후, 앞에서부터 보며 다른 순위의 최솟값을 갱신할 때만 선발)
// 작성한 코드의 시간복잡도: O(NlogN)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);

for (let tc = 0; tc < T; tc++) {
  const N = Number(input[idx++]);

  const applicants = [];
  for (let i = 0; i < N; i++) {
    const [doc, interview] = input[idx++].split(" ").map(Number);
    applicants.push([doc, interview]);
  }

  applicants.sort((a, b) => a[0] - b[0]);

  let best = Infinity;
  let count = 0;

  for (let i = 0; i < applicants.length; i++) {
    const [_, interview] = applicants[i];

    if (interview < best) {
      best = interview;
      count++;
    }
  }

  console.log(count);
}
