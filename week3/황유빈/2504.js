const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim();

// ‘()’ 인 괄호열의 값은 2이다.
// ‘[]’ 인 괄호열의 값은 3이다.
// ‘(X)’ 의 괄호값은 2×값(X) 으로 계산된다.
// ‘[X]’ 의 괄호값은 3×값(X) 으로 계산된다.
// 올바른 괄호열 X와 Y가 결합된 XY의 괄호값은 값(XY)= 값(X)+값(Y) 로 계산된다.
// (()[[]])([]) -> 28
// (2+3x3)+(3)
// 22+6 = 28

const stack = [];
let currentMultipler = 1;
let result = 0;

for (let i = 0; i < input.length; i++) {
  const curretnIndex = input[i];
  const previousIndex = input[i - 1];

  if (curretnIndex === "(") {
    stack.push("(");
    currentMultipler = currentMultipler * 2;
  } else if (curretnIndex === "[") {
    stack.push("[");
    currentMultipler = currentMultipler * 3;
  } else if (curretnIndex === ")") {
    // error 케이스
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      console.log(0);
      process.exit(0);
    }
    if (previousIndex === "(") {
      result = result + currentMultipler;
    }
    stack.pop();
    currentMultipler = currentMultipler / 2;
  } else if (curretnIndex === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      console.log(0);
      process.exit(0);
    }
    if (previousIndex === "[") {
      result = result + currentMultipler;
    }
    stack.pop();
    currentMultipler = currentMultipler / 3;
  } else {
    console.log(0);
    process.exit(0);
  }
}
console.log(stack.length === 0 ? result : 0);
