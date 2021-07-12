function solution(x) {
  let sum = 0;
  let answer = false;

  let array = String(x).split('');
  array.map((item) => (sum += Number(item)));

  return (answer = x % sum ? false : true);
}
