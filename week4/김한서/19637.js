const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  let power = [];
  for (let i = 0; i < n; i++) {
    const [a, b] = input[i + 1].split(" ");
    power.push([a, Number(b)]);
  }

  let nums = [];
  for (let i = 0; i < m; i++) {
    nums.push(Number(input[n + i + 1]));
  }

  const result = [];

  nums.forEach((i) => {
    let left = 0;
    let right = n - 1;
    let idx = n - 1;

    // i보다 큰 첫 칭호를 찾는 이진 탐색
    // i <= power[mid][1] → 후보 저장 후 왼쪽 탐색
    // 아니면 오른쪽 탐색
    // 끝나면 idx가 정답

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (i <= power[mid][1]) {
        idx = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    result.push(power[idx][0]);
  });

  console.log(result.join("\n"));
});
