// Lv1. 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = "";
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];

    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) answer += word[j].toUpperCase();
      else answer += word[j].toLowerCase();
    }
    if (i !== arr.length - 1) answer += " ";
  }

  return answer;
}
