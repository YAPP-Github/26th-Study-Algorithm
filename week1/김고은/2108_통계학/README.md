
[# 문제링크](https://www.acmicpc.net/problem/2108)

## 접근 방향 설명

> - 문제 자체는 까다롭지 않았으나, 최빈값 구하는 부분에서 처리를 고민하느라 시간을 들이게 되었던 문제였다. 
> - 우선 각각의 기능을 수행할 수 있도록, `평균` / `최빈값` / `중앙값` / `범위`를 구하는 로직을 메서드 단위로 분리하여 명확하게 관리할 수 있도록 클래스를 만들었다.
> - (1) 평균의 경우, reduce 를 통해 누적합을 만들어주었으며, 반올림 값을 나타내어야 한다는 조건에 따라 Math.round 처리해주었다. 또한, 마지막 케이스에서 음의 0이 나타났기 때문에 삼항연산자로 조건부 처리를 걸어주었다.
> - (2) 범위와, 중앙값의 경우 설명은 생략한다 (개념적인 부분과 상당히 맞닿아있기 때문)
> - (3) 최빈값의 경우, `Map` 객체를 통해서 `value` 에 등장 횟수를 넣고 `sorting` 하는 방식을 택했다. 
> 이후 `value`를 기준으로 최대값 (최빈값이 등장하는 횟수)를 뽑아내고, 최빈값 후보를 뽑아내어 삼항연산자로 최빈값의 갯수에 따라 값을 출력한다.

---

## 풀이 과정에서 새롭게 느낀점(배운점)

- 오랜만에 Map 객체를 쓰다보니 개념이 헷갈려 MDN의 힘을 빌렸다 
잊히지 않게 해야겠다. 탐색의 이점을 살리기 위해서 사용하고자 했는데 사실 input을 바로 sort 처리하고 넘겨주는지라 성능적으로 큰 이점이 되지는 않았던 것 같다. 앞으로는 성능적 측면도 고려하는 것이 좋겠다. 

[MDN Map 관련 참고 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)


---

## 풀이 코드

```js
let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let N = input[0];
let numbers = input.slice(1);

let sorted = numbers.sort((a, b) => a - b);

class Calculator {
    constructor (arr) {
        this.arr = arr
    }

    length () {
        return this.arr.length;
    }

    avg () {
        let sum_arr = this.arr.reduce((acc, val) => acc + val, 0);
        let avg = Math.round(sum_arr / this.length());
        return  avg === -0? 0: avg;
    }

    median () {
        return this.arr[Math.floor(this.length() / 2)];
    }

    range () {
        return this.arr[this.length() -1 ] -this.arr[0]; 
    }

    mode() {
        let freq = new Map();

        for (let i of this.arr) {
            freq.set(i, (freq.get(i) || 0) + 1);
        }

        let max_freq = Math.max(...freq.values());

        let modes = [];
        for (let [num, count] of freq.entries()) {
            if (count === max_freq) {
                modes.push(num);
            }
        }

        modes.sort((a, b) => a - b);

        return modes.length > 1 ? modes[1] : modes[0];
    }
};

let rate = new Calculator(sorted);

console.log(rate.avg());
console.log(rate.median());
console.log(rate.mode())
console.log(rate.range());

```


---


## 문제
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.

산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.

## 입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.

## 출력
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
둘째 줄에는 중앙값을 출력한다.
셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
넷째 줄에는 범위를 출력한다.