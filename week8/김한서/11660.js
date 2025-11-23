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
  const [n, m] = input[0].split(" ").map(Number);

  let nums = [];
  let index = 1;
  for (let i = 0; i < n; i++) {
    nums.push(input[index++].split(" ").map(Number));
  }

  const prefix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] =
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1] +
        nums[i - 1][j - 1];
    }
  }

  let output = [];
  for (let i = 0; i < m; i++) {
    const [x1, y1, x2, y2] = input[index++].split(" ").map(Number);
    const sum =
      prefix[x2][y2] -
      prefix[x1 - 1][y2] -
      prefix[x2][y1 - 1] +
      prefix[x1 - 1][y1 - 1];

    output.push(sum);
  }

  console.log(output.join("\n"));
});

// 2차원 구간 합은 매번 직접 더하면 시간초과
