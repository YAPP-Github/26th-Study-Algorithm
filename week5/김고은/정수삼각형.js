function solution(triangle) {
    const height = triangle.length;
    let dp = Array.from({ length: height }, (_, idx) => [...triangle[idx]]);

    for (let i = 1; i < height; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const left = dp[i - 1][j - 1] ?? 0;
            const right = dp[i - 1][j] ?? 0;

            dp[i][j] = triangle[i][j] + Math.max(left, right);
        }
    }

    return (Math.max(...dp[height -1]))
}
