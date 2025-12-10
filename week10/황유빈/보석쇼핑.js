function solution(gems) {
  const gemKinds = new Set(gems).size;

  const gemMap = new Map();
  let answer = [1, gems.length];
  let start = 0;
  let end = 0;

  for (end = 0; end < gems.length; end++) {
    const rightGem = gems[end];
    gemMap.set(rightGem, (gemMap.get(rightGem) || 0) + 1);

    while (gemMap.size === gemKinds) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      const leftGem = gems[start];
      gemMap.set(leftGem, gemMap.get(leftGem) - 1);

      if (gemMap.get(leftGem) === 0) {
        gemMap.delete(leftGem);
      }

      start++;
    }
  }

  return answer;
}
