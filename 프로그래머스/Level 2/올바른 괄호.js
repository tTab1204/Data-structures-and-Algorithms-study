function solution(s) {
  if (s[s.length - 1] != ')') return false;

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? sum++ : sum--;

    // 이 조건을 생각을 못했다. 어려웠다.
    // 순차적으로 탐색할 때, "(" 갯수를 ")"가 넘어서는 안된다.
    if (sum < 0) return false;
  }

  return sum === 0 ? true : false;
}
