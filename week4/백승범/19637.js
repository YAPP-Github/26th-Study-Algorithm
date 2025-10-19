let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= n; i++) {
  const [one, two] = input[i].trim().split(" ");
  if (arr.length > 0 && arr[arr.length - 1][1] !== Number(two)) {
    arr.push([one, Number(two)]);
  } else if (arr.length === 0) {
    arr.push([one, Number(two)]);
  }
}

const search = (now) => {
  let start = 0;
  let end = arr.length - 1;
  let answer = end;

  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (arr[mid][1] >= now) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return arr[answer][0];
};
const ans = [];
for (let i = n + 1; i < input.length; i++) {
  ans.push(search(Number(input[i])));
}

console.log(ans.join("\n"));
