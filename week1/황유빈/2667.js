const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/yubin/26th-Study-Algorithm/week1/황유빈/2667.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = Number(input[0]);
const grid = input.slice(1).map((l) => l.trim().split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const sizes = [];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (grid[r][c] === 1 && !visited[r][c]) {
      let cnt = 0;
      const q = [[r, c]];
      let h = 0;
      visited[r][c] = true;
      while (h < q.length) {
        const [cr, cc] = q[h++];
        cnt++;
        for (let k = 0; k < 4; k++) {
          const nr = cr + dr[k],
            nc = cc + dc[k];
          if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
          if (visited[nr][nc] || grid[nr][nc] === 0) continue;
          visited[nr][nc] = true;
          q.push([nr, nc]);
        }
      }
      sizes.push(cnt);
    }
  }
}

sizes.sort((a, b) => a - b);
console.log([sizes.length, ...sizes].join("\n"));
