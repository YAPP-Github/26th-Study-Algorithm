// Lv2. 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 1 <= s.length <= 1,000,000 -> 최대 허용 시간복잡도: O(NlogN)
// 알고리즘: 스택
// 내가 작성한 코드의 시간복잡도: O(N)

function solution(s) {
  let stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}
