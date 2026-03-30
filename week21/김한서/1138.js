const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const n = Number(input[0]);
  const hint = input[1].split(" ").map(Number);
  let answer = [];
  for (let h = n; h >= 1; h--) {
    // splice(시작위치, 삭제개수, 추가할값)
    answer.splice(hint[h - 1], 0, h);
  }
  console.log(answer.join(" "));
});

// 키가 큰 사람부터 작은 사람 순서로 삽입
// 왼쪽에 큰 사람 몇 명 있는지 = 배열에서 몇 번째 칸에 넣을지
// 줄을 선 순서대로 키 출력
