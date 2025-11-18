// 13414. 수강신청 (실버3)
// https://www.acmicpc.net/problem/13414

// 입력값의 조건 1 <= K <= 100,000, 1 <= L <= 500,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 큐 or 해시
// 내가 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// k: 수강할 수 있는 인원, l: 대기 목록 길이
const [k, l] = input[0].split(" ").map(Number);

// Set을 이용해 클릭 순서를 유지하면서 중복을 처리 (Set은 삽입 순서를 기억함)
// 일반 배열로 이미 들어온 학생을 다시 뒤로 보내려면, 해당 학생을 찾는 데 O(N)이 걸림
// Set은 학번을 key로 바로 찾고 삭제/추가할 수 있어 평균 O(1)에 처리 가능
const waitingSet = new Set();

for (let i = 0; i < l; i++) {
  const student = input[i + 1];

  // 대기열에 들어가 있다가 버튼을 다시 누른 경우, 삭제 후 대기 목록의 맨 뒤로 보냄
  if (waitingSet.has(student)) {
    waitingSet.delete(student);
  }

  waitingSet.add(student);
}

// 수강할 수 있는 인원(k)만큼 자르기
const students = [...waitingSet].splice(0, k);

students.forEach((student) => {
  console.log(student);
});
