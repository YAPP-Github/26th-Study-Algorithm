function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set());
  for (let i = 1; i < 9; i++) {
    const num = Number(String(N).repeat(i));
    dp[i].add(num);
    for (let a = 1; a < i; a++) {
      const b = i - a;
      for (const x of dp[a]) {
        for (const y of dp[b]) {
          dp[i].add(x + y);
          dp[i].add(x - y);
          dp[i].add(x * y);
          if (y !== 0) dp[i].add(x / y);
        }
      }
    }
    if (dp[i].has(number)) {
      return i;
    }
  }

  return 8;
}

console.log(solution(5, 12));
