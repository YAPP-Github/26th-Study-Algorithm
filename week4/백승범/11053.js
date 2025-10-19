let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = input.splice(0, 1)[0];
input = input[0].split(" ").map(Number);

const dp = [[input[0], 1]];

for (let i = 1; i < count; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (dp[j][0] < input[i]) {
      max = Math.max(max, dp[j][1]);
    }
  }
  dp.push([input[i], max + 1]);
}
let answer = 0;
dp.forEach((val) => {
  answer = Math.max(answer, val[1]);
});

console.log(answer);
