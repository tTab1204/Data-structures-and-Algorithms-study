function solution(s) {
  let arr = [];
  let temp = [];
  arr = s.split(' ').sort((a, b) => a - b);

  let min = arr.shift();
  let max = arr.pop();

  temp.push(min);
  temp.push(max);

  return temp.join(' ');
}

// 다른 사람의 풀이
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

// Math.max, Math.min을 생각 못했다. 여러 내장 함수를 잘 활용해보자.
// 안에 전개 연산자로 넣으니까 되네
// max, min이 문자열도 되는게 신기 (Number, String이렇게 써줄 필요 없음)
