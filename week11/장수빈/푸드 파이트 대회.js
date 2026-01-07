// Lv1. 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 2 <= food.length <= 9, 1 <= food의 원소 <= 1,000 -> 최대 허용 시간복잡도: O(N^2)
// 알고리즘: 구현
// 내가 작성한 코드의 시간복잡도: O(N)

function solution(food) {
  let results = [];

  for (let i = 1; i < food.length; i++) {
    const repeat = String(i).repeat(food[i] / 2);
    results.push(repeat);
  }

  return results.join("") + "0" + [...results].reverse().join("");

  // 내가 작성한 코드의 시간복잡도: O(N^2)
  //     let results = '';

  //     for (let i = 1; i < food.length; i++) {
  //         let calorie = food[i]
  //         if (food[i] % 2 === 1) calorie = food[i] - 1

  //         for (let j = 0; j < calorie / 2; j++) {
  //             results += i
  //         }
  //     }

  //     const reversed = results.split("").reverse().join("")
  //     results += "0"
  //     results += reversed

  //     return results
}
