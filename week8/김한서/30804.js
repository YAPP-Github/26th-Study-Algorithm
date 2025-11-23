const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const n = Number(input[0]);
  const nums = input[1].split(" ").map(Number);
  let fruits = new Map();
  let left = 0;
  let answer = 0;
  for (let right = 0; right < n; right++) {
    fruits.set(nums[right], (fruits.get(nums[right]) || 0) + 1);
    while (fruits.size > 2) {
      fruits.set(nums[left], fruits.get(nums[left]) - 1);
      if (fruits.get(nums[left]) === 0) fruits.delete(nums[left]);
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  console.log(answer);
});

// 투포인터
// 오른쪽 포인터 과일 추가
// 과일 종류 3개 이상 -> 왼쪽 포인터 줄이기
