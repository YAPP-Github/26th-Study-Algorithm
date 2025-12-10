function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");
    const num = Number(value);

    if (command === "I") {
      queue.push(num);
    } else {
      if (queue.length > 0) {
        if (num === 1) {
          // 최댓값 삭제
          const max = Math.max(...queue);
          const idx = queue.indexOf(max);
          queue.splice(idx, 1);
        } else {
          // 최솟값 삭제
          const min = Math.min(...queue);
          const idx = queue.indexOf(min);
          queue.splice(idx, 1);
        }
      }
    }
  });

  // 모든 연산 후 처리
  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [Math.max(...queue), Math.min(...queue)];
  }
}
