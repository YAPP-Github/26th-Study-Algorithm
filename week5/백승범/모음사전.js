function solution(word) {
  const v = ['A', 'E', 'I', 'O', 'U'];
  let ans = 0;
  
  const dfs = (cur, depth) => {
    if (cur === word) {
      return true;
    }
    if (depth === 5) {
      return false;
    }
    
    for (let i = 0; i < 5; i++) {
      ans++;
      if (dfs(cur + v[i], depth + 1)) {
        return true; 
      }
    }
    return false;
  };
  
  dfs('', 0);
  return ans;
}