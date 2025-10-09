const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/yubin/26th-Study-Algorithm/week1/황유빈/2910.txt",
    "utf8"
  )
  .trim()
  .split(/\s+/)
  .map(Number);

let i = 0;
const N = input[i++],
  C = input[i++];
const arr = input.slice(i, i + N);

const stats = new Map();
for (let idx = 0; idx < N; idx++) {
  const v = arr[idx];
  if (!stats.has(v)) stats.set(v, { v, cnt: 0, first: idx });
  stats.get(v).cnt++;
}

const sorted = Array.from(stats.values()).sort(
  (a, b) => b.cnt - a.cnt || a.first - b.first
);

const out = [];
for (const { v, cnt } of sorted) for (let k = 0; k < cnt; k++) out.push(v);
console.log(out.join(" "));
