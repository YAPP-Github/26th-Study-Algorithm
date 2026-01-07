// Lv1. 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 1 <= s.length <= 10,000 -> 최대 허용 시간복잡도: O(N^2)
// 알고리즘: 구현, 완전탐색(정답을 찾기 위해 가능한 후보를 전부 확인)
// 내가 작성한 코드의 시간복잡도: O(N^2)

function solution(s) {
  let results = Array(s.length).fill(-1);

  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        results[i] = i - j;
        break; // 자신과 가장 가까운 글자를 찾으면 되니까, 찾으면 바로 break로 종료하기
      }
    }
  }
  return results;
}
