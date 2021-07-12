// 내 풀이
function solution(n) {
  let array = String(n).split('').reverse();

  let answer = array.map((item) => Number(item));
  return answer;
}

//다른 사람의 풀이
function solution(n) {
  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);

    // 이 부분은 대체 어떻게 생각한거지..?
    n = Math.floor(n / 10);

    // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
    // 내림..의 느낌
  } while (n > 0);

  return arr;
}
