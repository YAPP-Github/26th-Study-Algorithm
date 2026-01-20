// 실버 4. 붙임성 좋은 총총이
// https://www.acmicpc.net/problem/26069

// 1 <= n <= 1,000
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 구현 + Set
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const name = new Set(["ChongChong"]);

for (let i = 1; i <= n; i++) {
  const [name1, name2] = input[i].split(" ");

  if (name.has(name1) || name.has(name2)) {
    name.add(name1);
    name.add(name2);
  }
}

console.log(name.size);
