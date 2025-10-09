const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/yubin/26th-Study-Algorithm/week1/황유빈/16926.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
const A = input.slice(1).map((l) => l.split(" ").map(Number));

const layers = Math.min(N, M) >> 1;

for (let s = 0; s < layers; s++) {
  const r1 = s,
    c1 = s,
    r2 = N - 1 - s,
    c2 = M - 1 - s;
  const ring = [];

  for (let c = c1; c <= c2; c++) ring.push(A[r1][c]);
  for (let r = r1 + 1; r <= r2 - 1; r++) ring.push(A[r][c2]);
  for (let c = c2; c >= c1; c--) ring.push(A[r2][c]);
  for (let r = r2 - 1; r >= r1 + 1; r--) ring.push(A[r][c1]);

  const len = ring.length;
  const k = R % len;
  if (k !== 0) {
    const rotated = ring.slice(k).concat(ring.slice(0, k));
    let idx = 0;

    for (let c = c1; c <= c2; c++) A[r1][c] = rotated[idx++];
    for (let r = r1 + 1; r <= r2 - 1; r++) A[r][c2] = rotated[idx++];
    for (let c = c2; c >= c1; c--) A[r2][c] = rotated[idx++];
    for (let r = r2 - 1; r >= r1 + 1; r--) A[r][c1] = rotated[idx++];
  }
}

console.log(A.map((row) => row.join(" ")).join("\n"));
