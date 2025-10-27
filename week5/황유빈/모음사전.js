function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  const dict = [];

  function dfs(current) {
    if (current.length > 0) {
      dict.push(current);
    }
    if (current.length === 5) return;

    for (const c of chars) {
      dfs(current + c);
    }
  }
  dfs("");
  dict.sort();

  return dict.indexOf(word) + 1;
}
