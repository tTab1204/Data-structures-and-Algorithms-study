function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((item) => !isNaN(item));
  }
  return false;
}

// 숫자의 표현
function solution(n) {
  let start = 0;
  let end = 0;
  let arr = [];
  let answerNum = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (arr[end] <= 15) {
    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
    if (sum < n) end++;
    else if (sum > n) start++;
    else {
      answerNum++;
      end++;
      sum = 0;
    }
  }
  return answerNum;
}
// 왜 시간초과지 왜 시간초과지 왜 시간초과인데
