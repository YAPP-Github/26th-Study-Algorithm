const fs = require("fs");
const lines = fs
  .readFileSync(
    "/Users/yubin/26th-Study-Algorithm/week1/황유빈/2852.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = Number(lines[0]);
const events = lines.slice(1, 1 + N).map((l) => {
  const [t, s] = l.trim().split(" ");
  const [mm, ss] = s.split(":").map(Number);
  return { team: Number(t), time: mm * 60 + ss };
});

let s1 = 0,
  s2 = 0;
let lead1 = 0,
  lead2 = 0;
let last = 0;

function addLead(from, to) {
  if (s1 > s2) lead1 += to - from;
  else if (s2 > s1) lead2 += to - from;
}

for (const e of events) {
  addLead(last, e.time);
  if (e.team === 1) s1++;
  else s2++;
  last = e.time;
}

addLead(last, 48 * 60);

const f = (x) => {
  const m = String(Math.floor(x / 60)).padStart(2, "0");
  const s = String(x % 60).padStart(2, "0");
  return `${m}:${s}`;
};

console.log(f(lead1));
console.log(f(lead2));
