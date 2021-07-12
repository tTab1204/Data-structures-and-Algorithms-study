function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    x = x * i;
    answer.push(x);
    x = x / i;
  }
  return answer;
}

// 다른 사람의 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// map함수를 씁시다..
