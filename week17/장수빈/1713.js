// 실버 1. 후보 추천하기
// https://www.acmicpc.net/problem/1713

// 1 <= N <= 20, 1 <= 추천 횟수 <= 1,000
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 시뮬레이션, 큐
// 작성한 코드의 시간복잡도: O(N * M)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const students = input[2].split(" ").map(Number);

const photoMap = new Map();
let time = 0; // 처음 게시한 시점

for (let i = 0; i < M; i++) {
  const id = students[i];
  time++;

  // 이미 photoMap에 게시되어 있을 경우
  if (photoMap.has(id)) {
    photoMap.get(id).count++;
    continue;
  }

  // photoMap에 게시되어 있지 않고 photoMap에 자리가 남아있을 경우
  if (photoMap.size < N) {
    photoMap.set(id, { count: 1, time });
  }
  // photoMap에 자리가 없을 경우
  else {
    let removeId = -1; // 삭제할 아이디

    for (const [key, value] of photoMap) {
      if (removeId === -1) {
        removeId = key;
        continue;
      }

      const removeCandidate = photoMap.get(removeId); // 삭제하고 싶은 후보
      const cur = value; // 현재 비교할 후보

      // 현재 비교할 후보의 count가 더 적을 경우 - 가장 적은 후보가 1명일 경우
      if (removeCandidate.count > cur.count) {
        removeId = key;
      }
      // 가장 적은 후보가 2명 이상일 경우 - 더 늦게 들어온 후보가 제거 대상
      else if (
        removeCandidate.count === cur.count &&
        removeCandidate.time > cur.time
      ) {
        removeId = key;
      }
    }
    photoMap.delete(removeId); // 제거 후
    photoMap.set(id, { count: 1, time }); // 새로운 후보 등록
  }
}

const results = [];

for (const [key, _] of photoMap) {
  results.push(key);
}

results.sort((a, b) => a - b);

console.log(...results);
