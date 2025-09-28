const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week1/황유빈/10814.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const arr = input.map((element) => {
  const [age, name] = element.split(" ");
  return [Number(age), name];
});

arr
  .sort((a, b) => a[0] - b[0])
  .forEach((element) => console.log(element[0] + " " + element[1]));
