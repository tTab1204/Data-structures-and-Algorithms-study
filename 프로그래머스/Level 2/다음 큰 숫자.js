//조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
//조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
//조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
function solution(n) {
  var answer = 0;
  var target = n + 1;
  var strN = n.toString(2);
  var countOne = strN.split('').filter((str) => str === '1').length;

  while (target > n) {
    if (
      countOne ===
      target
        .toString(2)
        .split('')
        .filter((str) => str === '1').length
    ) {
      break;
    }
    target = target + 1;
  }

  answer = target;
  return answer;
}

//어떻게 풀었지?
