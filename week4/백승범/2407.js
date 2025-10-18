let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [n, m] = input;

const arr = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m + 1 }, () => 0n),
);

for (let i = 0; i <= n; i++) {
  arr[i][0] = 1n;
}

for (let i = 1; i <= m; i++) {
  arr[i][i] = 1n;
}

const dp = (n, m) => {
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i !== j) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  return arr[n][m];
};

console.log(dp(n, m).toString());
