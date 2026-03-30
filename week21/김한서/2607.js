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
  let answer = 0;
  const standard_word = input[1];
  const standardCount = countAlphabet(standard_word);

  for (let i = 2; i <= n; i++) {
    const word = input[i];
    const wordCount = countAlphabet(word);

    let p = 0;
    let n = 0;
    for (let j = 0; j < 26; j++) {
      const diff = standardCount[j] - wordCount[j];
      if (diff > 0) p += diff;
      else if (diff < 0) n += -diff;
    }

    if (p <= 1 && n <= 1) {
      answer++;
    }
  }

  console.log(answer);
});

function countAlphabet(word) {
  const count = new Array(26).fill(0);
  for (const w of word) {
    count[w.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  return count;
}

// 알파벳 개수 비교
// 각 알파벳의 등장 횟수를 세는 배열 생성하기
// 빈도수 배열의 차이 배열 만들기
