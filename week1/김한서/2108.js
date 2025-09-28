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
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(Number(input[i + 1]));
  }
  console.log(
    average(nums) +
      "\n" +
      median(nums) +
      "\n" +
      frequency(nums) +
      "\n" +
      range(nums)
  );
});

function average(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return Math.round(sum / nums.length);
}

function median(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function frequency(nums) {
  let map = new Map();
  nums.forEach((i) => map.set(i, map.get(i) + 1 || 0));
  let maxFreq = 0;
  let res = [];
  map.forEach((val, key) => {
    if (val > maxFreq) maxFreq = val;
  });
  map.forEach((val, key) => {
    if (maxFreq === val) {
      res.push(key);
    }
  });
  res.sort((a, b) => a - b);
  return res.length > 1 ? res[1] : res[0];
}

function range(nums) {
  return Math.max(...nums) - Math.min(...nums);
}
