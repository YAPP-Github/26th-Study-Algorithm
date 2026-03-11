// 실버 5. 비밀번호 발음하기
// https://www.acmicpc.net/problem/4659

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

while (input[idx] !== "end") {
  const word = input[idx];

  let vowelCnt = 0; // 모음 개수 count
  let consonantCnt = 0; // 자음 개수 count

  let isCorrect = false;

  // 1. 모음 하나 반드시 포함
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  ) {
    isCorrect = true;
  } else {
    console.log("<" + word + ">" + " is not acceptable.");
    isCorrect = false;
    idx++;
    continue;
  }

  // 2. 모음 or 자음 3개 연속 X
  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    vowelCnt++;
    consonantCnt = 0;
  } else {
    consonantCnt++;
    vowelCnt = 0;
  }

  for (let i = 1; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vowelCnt++;
      consonantCnt = 0;
    } else if (
      word[i] !== "a" &&
      word[i] !== "e" &&
      word[i] !== "i" &&
      word[i] !== "o" &&
      word[i] !== "u"
    ) {
      consonantCnt++;
      vowelCnt = 0;
    }

    if (vowelCnt >= 3 || consonantCnt >= 3) {
      isCorrect = false;
      break;
    }
  }

  if (!isCorrect) {
    console.log("<" + word + ">" + " is not acceptable.");
    idx++;
    continue;
  }

  // 3. 같은 글자가 2번 연속 X
  for (let i = 1; i <= word.length; i++) {
    if (
      word[i - 1] === word[i] &&
      word[i - 1] !== "o" &&
      word[i] !== "o" &&
      word[i - 1] !== "e" &&
      word[i] !== "o"
    ) {
      console.log("<" + word + ">" + " is not acceptable.");
      isCorrect = false;
      break;
    } else {
      isCorrect = true;
    }
  }

  if (isCorrect) {
    console.log("<" + word + ">" + " is acceptable.");
  }

  idx++;
}
