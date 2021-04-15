// 1. 문자열을 정수로 바꾸기
function solution(s) {
  return Number(s);
}

// 다른 사람의 풀이
function strToInt(str) {
  return str / 1;
}
// 사칙연산 되면서 문자가 자동으로 파싱이 되는거
// ㄷㄷ

// 2. 제일 작은 수 제거하기
function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  let minNum = Math.min.apply(null, arr);
  let minOfIndex = arr.indexOf(minNum);
  arr.splice(minOfIndex, 1);
  return arr;
}

// 3. 최대공약수와 최소공배수
function solution(n, m) {}
// 유클리드 호제법
// 1. a,b 를 서로를 나눈다. 만약 나누어진다면 b가 최대공약수이다.(a > b이다.)
// 2. 만약 서로가 나누어지지 않는다면 b와 a % b(a를 b로 나눈 나머지) 다시 나눈다.
// 3. 서로가 나누어진다면 a % b가 최대공약수이다. 만약 나누어지지 않는다면 다시 위 방법을 반복한다.
// 최대공약수 = 유클리드 호제법을 이용
// 최소공배수 두 수의 곱 / 최대공약수

// 재귀? 이해 안되니 다음에 다시 보기

// 4. 정수 제곱근 판별
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
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : "-1";
  return result;
}
// Math.pow(n,m) = 정수n의 m제곱을 리턴한다.

// Math.sqrt() 함수는 숫자의 제곱근을 반환
