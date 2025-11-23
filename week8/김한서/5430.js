const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line.trim()));

rl.on("close", () => {
  const t = Number(input[0]);
  let line = 1;
  const answer = [];

  for (let i = 0; i < t; i++) {
    const p = input[line++];
    const n = Number(input[line++]);
    let arr = input[line++].slice(1, -1).split(",");
    if (n === 0) arr = [];

    let reverse = false;
    let error = false;

    let start = 0;
    let end = arr.length - 1;

    for (const cmd of p) {
      if (cmd === "R") {
        reverse = !reverse;
      } else if (cmd === "D") {
        if (start > end) {
          answer.push("error");
          error = true;
          break;
        }
        if (reverse) {
          end--;
        } else {
          start++;
        }
      }
    }

    if (!error) {
      const res = arr.slice(start, end + 1);
      if (reverse) res.reverse();
      answer.push("[" + res.join(",") + "]");
    }
  }

  console.log(answer.join("\n"));
});
