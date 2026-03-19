// 실버 4. 쿠키의 신체 측정
// https://www.acmicpc.net/problem/20125

// 1 <= N <= 1,000
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 구현
// 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const cookieArr = [];

for (let i = 1; i <= N; i++) {
  const arr = input[i].split("");
  cookieArr.push(arr);
}

let heart = [];

// 1. 가장 첫번째로 발견된 *가 머리
for (let i = 0; i < N; i++) {
  let isHead = false;

  for (let j = 0; j < N; j++) {
    if (cookieArr[i][j] === "*") {
      // 2. 심장은 머리보다 한칸 아래
      heart.push(i + 2);
      heart.push(j + 1);
      isHead = true;
      break;
    }
  }

  if (isHead) break;
}

let x = heart[0] - 1;
let y = heart[1] - 1;

// 3. 팔 길이 측정
let leftArm = 0;

for (let j = 0; j < y; j++) {
  if (cookieArr[x][j] === "*") leftArm++;
}

let rightArm = 0;

for (let j = y + 1; j < N; j++) {
  if (cookieArr[x][j] === "*") rightArm++;
}

// 4. 허리 길이 측정
let waist = [];
let waistCount = 0;

for (let i = x + 1; i < N; i++) {
  if (cookieArr[i][y] === "*") {
    waistCount++;
  } else {
    waist.push(i - 1);
    waist.push(y);
    break;
  }
}

// 5 다리 길이 측정
let leftLeg = 0;

for (let i = waist[0] + 1; i < N; i++) {
  if (cookieArr[i][y - 1] === "*") leftLeg++;
}

let rightLeg = 0;

for (let i = waist[0] + 1; i < N; i++) {
  if (cookieArr[i][y + 1] === "*") rightLeg++;
}

console.log(heart.join(" "));
console.log(leftArm, rightArm, waistCount, leftLeg, rightLeg);
