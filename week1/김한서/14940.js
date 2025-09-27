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
  const [n, m] = input[0].split(" ").map(Number);
  const map = [];
  let start = null;
  for (let i = 0; i < n; i++) {
    map.push(input[i + 1].split(" ").map(Number));
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        start = [i, j];
      }
    }
  }
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const result = Array.from({ length: n }, () => Array(m).fill(-1));

  let q = [];
  const [sx, sy] = start;
  q.push([sx, sy]);
  visited[sx][sy] = true;
  result[sx][sy] = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (visited[nx][ny]) continue;
      if (map[nx][ny] === 0) continue;
      else {
        visited[nx][ny] = true;
        q.push([nx, ny]);
        result[nx][ny] = result[x][y] + 1;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        result[i][j] = 0;
      }
    }
  }
  const output = result.map((i) => i.join(" ")).join("\n");
  console.log(output);
});
