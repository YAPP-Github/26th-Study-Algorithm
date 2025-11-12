// 전화번호 목록 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return true;
}

// 1 <= phone_book <= 10^6, 1 <= phone_book[i].length <= 20 (20은 거의 상수 취급)
// => 최대허용알고리즘: O(NlogN)

// 내가 작성한 코드의 시간복잡도
// sort()로 오름차순 정렬: O(NlogN)
// for문으로 phone_book 배열 순회: O(N)
// startsWith(): <= 20으로 상수 시간만큼 걸림
// => 총 O(NlogN)의 시간복잡도
