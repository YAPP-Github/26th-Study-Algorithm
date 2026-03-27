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
  const [n, new_score, p] = input[0].split(" ").map(Number);
  let scores;
  let rank = 1;
  if (n === 0) {
    return console.log(rank);
  }

  scores = input[1].split(" ").map(Number);

  // 리스트가 꽉 찼고 마지막 점수 이하면 진입 불가
  if (n >= p && new_score <= scores[n - 1]) {
    return console.log(-1);
  }

  for (const score of scores) {
    if (score > new_score) rank++;
  }
  return console.log(rank);
});
