const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const readline = require("readline");

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const n = Number(input[0]);
  const key = new Array(26).fill(0);

  for (let i = 1; i <= n; i++) {
    const idx = savedKey(input[i], key);
    if (idx === -1) {
      console.log(input[i]);
    } else {
      const arr = [...input[i]];
      arr[idx] = "[" + arr[idx] + "]";
      console.log(arr.join(""));
    }
  }
});

// 단축키가 설정된 알파벳의 index 반환
function savedKey(original, key) {
  const words = original.split(" ");

  // 각 단어의 첫 글자 확인
  let idx = 0;
  for (const w of words) {
    const code = w[0].toUpperCase().charCodeAt(0) - 65;
    if (key[code] === 0) {
      key[code] = 1;
      return idx;
    }
    idx += w.length + 1;
  }

  // 전체 글자 순회
  for (let i = 0; i < original.length; i++) {
    if (original[i] === " ") continue;
    const code = original[i].toUpperCase().charCodeAt(0) - 65;
    if (key[code] === 0) {
      key[code] = 1;
      return i;
    }
  }

  return -1;
}
