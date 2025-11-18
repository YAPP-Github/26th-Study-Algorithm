const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week7/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item)
  .slice(1)
  .filter((_, index) => index % 2 !== 0)
  .map((item) => item.split(" "))
  .map((item) => item.map(Number));

input.forEach((item) => {
  let answer = item[0];

  for (let i = 0; i < item.length; i++) {
    let context = 0;
    for (let j = i; j < item.length; j++) {
      context = context + item[j];
      if (answer < context) {
        answer = context;
      }
    }
  }
  console.log(answer);
});
//
// 1,2,3,4,5
//[2,1,-2,3,-5]
