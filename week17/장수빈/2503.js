// 실버 3. 숫자 야구
// https://www.acmicpc.net/problem/2503

// 알고리즘: 완전탐색

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

// 1 ~ 9까지 나올 수 있는 모든 3자리 수 생성
const getPermutations = (arr, r) => {
  const visited = Array(arr.length).fill(false);
  const result = [];
  const path = [];

  const dfs = (depth) => {
    if (depth === r) {
      result.push([...path]); // 순열 완성
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(arr[i]);
      dfs(depth + 1);
      path.pop();
      visited[i] = false;
    }
  };

  dfs(0);
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const candidates = getPermutations(arr, 3);

let result = 0;

for (let i = 0; i < candidates.length; i++) {
  const number = candidates[i].join("");

  let isAllTrue = true;

  for (let j = 1; j <= N; j++) {
    let strike = 0;
    let ball = 0;

    const [target, strikeCount, ballCount] = input[j].split(" ");

    // strike일 경우
    if (number[0] === target[0]) strike++;
    if (number[1] === target[1]) strike++;
    if (number[2] === target[2]) strike++;

    // ball일 경우
    for (let k = 0; k < 3; k++) {
      if (number[k] !== target[k] && target.split("").includes(number[k]))
        ball++;
    }

    // strike와 ball의 개수가 하나라도 같지 않으면 X
    if (strike !== Number(strikeCount) || ball !== Number(ballCount)) {
      isAllTrue = false;
      break; // 다음 타겟과 비교할 이유 X
    }
  }
  // N개의 target을 전부 동시에 만족해야함
  if (isAllTrue) result++;
}

console.log(result);
