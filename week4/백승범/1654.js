let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.splice(0, 1)[0].split(" ").map(Number);

input = input.map(Number);

let end = Math.max(...input);
let start = 1;

const make = (div) => {
  let total = 0;
  input.forEach((val) => {
    total = total + Math.floor(val / div);
  });
  return total >= N;
};

let ans = 0;

const check = () => {
  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (make(mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

check();

console.log(ans);
