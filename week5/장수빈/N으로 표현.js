// N으로 표현 LV3
// https://school.programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  if (N === number) return 1;

  // 1. 상태 선언 dp[i] : N을 i번 사용해서 표현할 수 있는 값들을 저장
  const dp = Array.from({ length: 9 }, () => new Set());

  // 2. 초기값 세팅
  // N을 1번만 사용했을 땐, 자기 자신만 존재
  dp[1].add(N);

  // 3. N은최대 8번만 반복 가능
  for (let i = 2; i <= 8; i++) {
    // 3-1. i만큼 반복되는 N을 먼저 dp에 삽입
    const repeat_num = Number(String(N).repeat(i));
    dp[i].add(repeat_num);

    // 3-2. (dp[j], dp[i-j]) 조합을 이용해 dp[i] 구성 (ex. dp[4] = dp[1] + dp[3], dp[2] + dp[2] 등..)
    for (let j = 1; j < i; j++) {
      for (const x of dp[j]) {
        for (const y of dp[i - j]) {
          dp[i].add(x + y);
          dp[i].add(x - y);
          dp[i].add(x * y);
          dp[i].add(Math.trunc(x / y));
        }
      }
    }

    // 3-3. dp[i]에 number가 포함되어 있다면, N을 i번 사용해서 만들 수 있다는 뜻이므로 i를 반환
    if (dp[i].has(number)) return i;
  }

  return -1;
}
