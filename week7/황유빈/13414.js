const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week7/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n");

const [k, l] = input[0].split(" ");
const arr = input.slice(1);

let reversedArr = arr.reverse();

let set = new Set(reversedArr);
let setArr = [...set];
let setReversedArr = setArr.reverse();

setReversedArr.forEach((item, index) => {
  if (index < k) {
    console.log(item);
  }
});


