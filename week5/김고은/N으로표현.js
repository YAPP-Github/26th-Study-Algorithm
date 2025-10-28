// 해설보고 푼 문제 
// 처음 구상: Top -> down으로 타켓 넘버에서, 사칙연산의 경우로 나눠서 재귀적 탐색을 돌려야 겠다라고 생각 
// 하지만, break point에 대한 감을 잡을 수가 없었고, dp 배열의 크기를 어떻게 설정해야 할지 .. 고뇌 .. 
// 따라서 bottom-up DP 접근으로 전환.

// 도출방법을 알고 나서 풀이: dp 적재의 기준이 N 사용 갯수 
// -> N의 사용이 1 ~ 8로 고정되어있기에 가능한 조합의 수를 담아 조합시키면서 set 객체로 중복을 피하고, 
// 존재하면 반복문의 i return / 없으면 반복문 끝내고 마지막에 -1 return 
function solution(N, number) {
    let dp = Array.from({length: 8 + 1}, () => new Set());
    
    for(let i =1; i <= 8; i++){
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = 1; j < i; j++){
            for(const a of dp[j]){
                for(const b of dp[i-j]){
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(a * b);
                    if (b !== 0) dp[i].add(Math.floor(a / b));
                }
            }
        }
        if(dp[i].has(number)) return i;
        
    }
    
    return -1;
}
