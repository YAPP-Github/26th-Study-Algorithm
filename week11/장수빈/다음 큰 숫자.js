// Lv2. 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 1 <= n <= 1,000,000 -> 최대 허용 시간복잡도: O(NlogN)
// 알고리즘: 시뮬레이션 (후보를 하나씩 변화시키며 만족할 때까지 확인해야 하기 때문에)
// 내가 작성한 코드의 시간복잡도: O(NlogN)

function solution(n) {
  const nOneCount = n.toString(2).split("1").length - 1;

  let number = n + 1;

  while (n < number) {
    let numberOneCount = number.toString(2).split("1").length - 1;

    if (nOneCount === numberOneCount) break;
    else number++;
  }

  return number;
}
