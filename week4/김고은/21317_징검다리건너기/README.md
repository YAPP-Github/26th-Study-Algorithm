
[# 문제링크](https://www.acmicpc.net/problem/21317)

## 접근 방향 설명
> 딱 DP가 떠올랐던 문제! 그중에서도 슈퍼점프를 어떻게 관리할지가 중요했다 
> 1. dp 배열을 구성할때 이중배열로 구성하여, 슈퍼점프를 고려한 부분과 그렇지 않은 이유로 나누어 고려했다.
> 2. 돌이 0, 1개인 경우도 고려해야 하기 때문에 분기처리를 통해 dp의 초기화를 진행한다. 
```js
if (N > 1) dp[1][0] = bridge[0][0];
if (N > 2) dp[2][0] = Math.min(
    dp[1][0] + bridge[1][0],
    bridge[0][1]
);
```
> 3. 그다음부터는 작은점프, 큰점프, 슈퍼점프가 모두 가능하기 때문에 배열을 통해서 dp를 돌린다
```js
for(let i = 3; i < +N; i++){
    dp[i][0] = Math.min(
        dp[i-1][0] + bridge[i-1][0],
        dp[i-2][0] + bridge[i-2][1]
    )

    dp[i][1] = Math.min(
        dp[i-1][1] + bridge[i-1][0],
        dp[i-2][1] + bridge[i-2][1],
        dp[i-3][0] + k,
    )
}
```


## 풀이 과정에서 새롭게 느낀점(배운점)

- N의 범위를 고려하지 못해서.. 참조에러로 애를 먹었던 문제 ... 

---

## 풀이 코드

```js
const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

const k = Number(rest.pop());
let bridge = [];
let dp = Array.from({length: +N }, () => [Infinity, Infinity]); // 0번 요소는 (슈퍼점프 제외 고려) / 1번 요소는 (슈퍼점프넣고 고려)

rest.forEach((e) => {
    const [s, b] = e.split(" ").map(Number);
    bridge.push([s,b])
})

dp[0][0] = 0;

if (N > 1) dp[1][0] = bridge[0][0];
if (N > 2) dp[2][0] = Math.min(
    dp[1][0] + bridge[1][0],
    bridge[0][1]
);

for(let i = 3; i < +N; i++){
    dp[i][0] = Math.min(
        dp[i-1][0] + bridge[i-1][0],
        dp[i-2][0] + bridge[i-2][1]
    )

    dp[i][1] = Math.min(
        dp[i-1][1] + bridge[i-1][0],
        dp[i-2][1] + bridge[i-2][1],
        dp[i-3][0] + k,
    )
}

console.log(Math.min( dp[N-1][0] , dp[N-1][1] ))
```

---

## 문제
심마니 영재는 산삼을 찾아다닌다.

산삼을 찾던 영재는 N개의 돌이 일렬로 나열되어 있는 강가를 발견했고, 마지막 돌 틈 사이에 산삼이 있다는 사실을 알게 되었다.

마지막 돌 틈 사이에 있는 산삼을 캐기 위해 영재는 돌과 돌 사이를 점프하면서 이동하며 점프의 종류는 3가지가 있다.

점프의 종류에는 현재 위치에서 다음 돌로 이동하는 작은 점프, 1개의 돌을 건너뛰어 이동하는 큰 점프, 2개의 돌을 건너뛰어 이동하는 매우 큰 점프가 있다.

각 점프를 할 때는 에너지를 소비하는데, 이 때 작은 점프와 큰 점프시 소비되는 에너지는 점프를 하는 돌의 번호마다 다르다.

매우 큰 점프는 단 한 번의 기회가 주어지는데, 이때는 점프를 하는 돌의 번호와 상관없이 k만큼의 에너지를 소비한다.

에너지를 최대한 아껴야 하는 영재가 산삼을 얻기 위해 필요한 에너지의 최솟값을 구하여라.

영재는 첫 번째 돌에서부터 출발한다.

##  입력
첫 번째 줄에는 돌의 개수 N이 주어진다.

N - 1개의 줄에 걸쳐서, 1번 돌부터 N - 1번 돌 까지의 작은 점프를 하기 위해 필요한 에너지, 큰 점프를 하기 위해 필요한 에너지가 주어진다.

마지막 줄에는 K가 주어진다.

##  출력
산삼을 얻기 위해 필요한 영재의 최소 에너지를 출력한다.