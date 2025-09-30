const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week1/황유빈/11650.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const array = input.map((element) => element.split(" "));

array.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

array.forEach((element) => {
  console.log(element[0] + " " + element[1]);
});
