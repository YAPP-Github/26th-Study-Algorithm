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
  let arr = [];
  for (let i = 0; i < n; i++) {
    const [x, y] = input[i + 1].split(" ").map(Number);
    arr.push([x, y]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  const output = arr.map((i) => i.join(" ")).join("\n");
  console.log(output);
});
