// 내 풀이
function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      result = (i + 1) * (i + 1);
      break;
    } else {
      result = -1;
    }
  }
  return result;
}

// 다른 사람의 풀이
function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : '-1';
  return result;
}
// Math.pow(n,m) = 정수n의 m제곱을 리턴한다.

// Math.sqrt() 함수는 숫자의 제곱근을 반환
