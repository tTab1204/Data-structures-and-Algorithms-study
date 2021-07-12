// 5. 중간값 찾기
// n개의 숫자 만들어서 numbers배열에 넣기
function median() {
  let n = prompt('숫자를 입력하세요');
  n = Number(n);

  let numbers = [];
  for (let i = 0; i < n; i++) {
    let n = Math.floor(Math.random() * 199) + 9;
    numbers.push(n);
  }
  // 정렬하고 조건문
  numbers.sort();
  if (n % 2 === 1) {
    return numbers[n - 1] / 2;
  } else {
    return (numbers[n / 2] + numbers[n / 2 - 1]) / 2;
  }
}
median();
// 의문점: for문과 sort함수를 쓰니 시간 복잡도가 커질텐데..
// 반복문을 하나만 쓸 수는 없을까?
