// 1. 예산

function solution(d, budget) {
  let sum = 0;
  let answer = 0;

  d = d.sort((a, b) => a - b);

  d.forEach((a) => {
    sum += a;
    if (sum > budget) return;

    answer++;
  });

  return answer;
}
