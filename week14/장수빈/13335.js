// 실버 1. 트럭
// https://www.acmicpc.net/problem/13335

// 1 <= n <= 1,000, 1 <= w <= 100, 10 <= L <= 1,000
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 구현, 시뮬레이션, 큐
// 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// n: 트럭의 수, w: 다리의 길이, L: 다리의 최대하중
const [n, w, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map(Number);

const queue = Array(w).fill(0); // w 길이만큼 다리 생성
let time = 0;
let index = 0; // 다음에 올라갈 트럭
let weight = 0; // 현재 다리 위에 올라가있는 트럭의 무게

// 마지막 트럭까지 다리에 올리고, 다리 위에 올라가있는 트럭이 없을 때까지 반복
while (index < n || weight > 0) {
  // 1초마다 트럭이 앞으로 한칸씩 전진 (맨 앞에 있는 트럭은 다리 위를 벗어남 => 즉, 현재 무게에서 제외)
  weight -= queue.shift();
  time++;

  // 무게 조건을 만족한다면, 새로운 트럭을 다리 위에 push
  if (weight + trucks[index] <= L) {
    queue.push(trucks[index]);
    weight += trucks[index];
    index++;
  } else {
    queue.push(0);
  }
}

console.log(time);
