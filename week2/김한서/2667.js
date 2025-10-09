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
  let map = [];
  for (let i = 0; i < n; i++) {
    map.push(input[i + 1].split("").map(Number));
  }
  let res = [];
  let visited = Array(n)
    .fill()
    .map(() => Array(n).fill(false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (x, y) => {
    let q = [];
    q.push([x, y]);
    visited[x][y] = true;
    let cnt = 1;
    while (q.length > 0) {
      let [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (!visited[nx][ny] && map[nx][ny] === 1) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
            cnt++;
          }
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        res.push(bfs(i, j));
      }
    }
  }
  res.sort((a, b) => a - b);
  console.log(res.length);
  console.log(res.join("\n"));
});
