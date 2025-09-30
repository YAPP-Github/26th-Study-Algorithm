let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const one = Math.floor(input / 5);
const two = Math.floor(input / 25);
const three = Math.floor(input / 125);

if (input === 0) {
  console.log(1);
} else {
  console.log(one + two + three);
}
