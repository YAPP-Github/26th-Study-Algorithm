let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let S = Number(fs.readFileSync(filePath).toString().trim());

let count = 1;

for (let i = 1; i < S; i++) {
  if (S - i > i) {
    S = S - i;
    count++;
  }
}

console.log(count);
