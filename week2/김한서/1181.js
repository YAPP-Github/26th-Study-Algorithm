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
  const n = Number(input[0]);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(input[i + 1]);
  }

  const temp = new Set(arr);
  const answer = [...temp];

  answer.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else return a.localeCompare(b);
  });

  console.log(answer.join("\n"));
});

// Set으로 중복 거르기
// 문자열 정렬은 localeCompare 메소드 이용
