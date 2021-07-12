// 3. 큰 놈, 작은 놈, 같은 놈
var input1 = prompt('숫자 1을 입력하세요');
input1 = Number(input1);
var input2 = prompt('숫자 2를 입력하세요');
input2 = Number(input2);

if (input1 > input2) {
  console.log('input1이 더 크다');
} else if (input1 === input2) {
  console.log('같다.');
} else {
  console.log('input2가 더 크다');
}

// 4. 최대수 구하기
const numbers3 = new Array(10);
numbers3.sort((a, b) => a - b);
console.log(numbers3[9]);
