// 이중우선순위큐 LV3
// https://school.programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [alphabet, num] = operations[i].split(" ");

    if (alphabet === "I") {
      queue.push(Number(num));
      queue.sort((a, b) => a - b);
    } else if (alphabet === "D") {
      if (num === "1") queue.pop();
      else queue.shift();
    }
  }
  return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}
