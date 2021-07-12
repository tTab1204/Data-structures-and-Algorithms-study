function solution(n) {
  let array = [];
  let sum = 0;
  array = String(n).split('');

  array.map((item) => (sum += Number(item)));

  return sum;
}
