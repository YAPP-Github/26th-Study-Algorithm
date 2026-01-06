// Lv2. 숫자의 표현
// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// n <= 10,000 -> 최대 허용 시간복잡도: O(N^2)
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다

function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) count++;
  }

  return count;
}
