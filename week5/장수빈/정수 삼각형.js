// 정수 삼각형 LV3
// https://school.programmers.co.kr/learn/courses/30/lessons/43105

function solution(triangle) {
  // const dp = Array.from({length : triangle.length}, () => []) -> triangle[i]의 길이를 미리 지정해두지 않아서 시간 초과 발생
  // 또한 행의 길이를 미리 지정해도, Array.from()은 내부적으로 콜백 호출 및 배열 생성 비용이 큼.
  const dp = triangle.map((row) => [...row]);

  // 1. 초기값 세팅
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 왼쪽 끝일 경우 -> 왼쪽 부모에게서 올 일이 없음
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + triangle[i][j];
      }
      // 오른쪽 끝일 경우 -> 오른쪽 부모에게서 올 일 없음
      else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][triangle[i - 1].length - 1] + triangle[i][j];
      }
      // 양쪽에서 올 수 있는 경우 -> 부모 중 큰 값과 덧셈
      else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  const dp_length = dp.length;
  const result = dp[dp_length - 1];

  return Math.max(...result);
}
