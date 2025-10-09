const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week1/황유빈/1181.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const words = input.slice(1, 1 + N);
const unique = Array.from(new Set(words));

unique.sort((a, b) => {
  const lenDiff = a.length - b.length;
  if (lenDiff !== 0) return lenDiff;
  return a.localeCompare(b);
});

console.log(unique.join("\n"));
