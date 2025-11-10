// 타켓 넘버 LV2
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// 입력값이 최대 20이므로 최대 허용 가능한 시간복잡도: O(2^N)
// 한가지 수(numbers[i])가 가질 수 있는 경우의 수는 2가지 (+ or -) -> 완전이진트리 가능

function solution(numbers, target) {
  let answer = 0;
  const dfs = (i, sum) => {
    if (i === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  };

  dfs(0, 0);
  return answer;
}
