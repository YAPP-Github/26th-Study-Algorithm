const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let lineIdx = 0;
const T = Number(input[lineIdx++]);

for (let i = 0; i < T; i++) {
  const n = Number(input[lineIdx++]);

  if (n === 0) {
    console.log(0);
    continue;
  }

  const clothesMap = {};

  for (let j = 0; j < n; j++) {
    const line = input[lineIdx++].trim().split(" ");
    const catergory = line[1];

    if (clothesMap[catergory]) {
      clothesMap[catergory]++;
    } else {
      clothesMap[catergory] = 1;
    }
  }

  let answer = 1;
  for (const key in clothesMap) {
    answer = answer * (clothesMap[key] + 1);
  }

  console.log(answer - 1);
}

//headgear

//1.hat 입음

//2.turban 입음

//3.안 입음

// eyewear

//1.sunglasses 입음

//2.안 입음
