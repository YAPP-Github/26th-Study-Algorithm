const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week7/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n");

const [startTime, middleTime, endTime] = input[0]
  .replaceAll(":", "")
  .split(" ");
const arr = input.slice(1);
let answer = 0;

const object = {
  출석: {},
  퇴장: {},
};

// startTime 이하면 출석 체크 인정
// middleTime 이상 endTime 이하면 퇴장 인정

arr.forEach((item) => {
  const [time, nickname] = item.split(" ");
  const realTime = time.replace(":", "");

  let attend = Number(startTime) - Number(realTime) >= 0;
  let out =
    Number(realTime) >= Number(middleTime) &&
    Number(realTime) <= Number(endTime);

  if (attend) {
    object.출석[nickname] = true;
  }
  if (out) {
    object.퇴장[nickname] = true;
  }
});

const keys1 = Object.keys(object.출석);

for (const key of keys1) {
  if (
    Object.prototype.hasOwnProperty.call(object.퇴장, key) &&
    object.출석[key] === object.퇴장[key]
  ) {
    answer++;
  }
}

console.log(answer)
