const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  const [n, c] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ");
  let freq = new Map();
  arr.forEach((i) => freq.set(i, (freq.get(i) || 0) + 1));
  let answer = [];
  let tmp = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  for (const [key, val] of tmp) {
    for (let i = 0; i < val; i++) {
      answer.push(key);
    }
  }
  console.log(answer.join(" "));
});

// map 객체에 빈도수 저장
// 다시 배열로 변환 후 빈도수 기준으로 정렬
// 빈도수만큼 키값을 배열에 push
