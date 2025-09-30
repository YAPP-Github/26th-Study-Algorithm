let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(0, 1);

const arr = [];

input.forEach((val) => {
  arr.push(val.split(" ").map(Number));
});

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

arr.forEach((val) => console.log(val[0], val[1]));
