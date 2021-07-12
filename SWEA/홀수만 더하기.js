// 1. 홀수만 더하기
const numbers = new Array(10);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sum += numbers[i];
  }
}
console.log(sum);
