// 내가 푼 방법
function solution(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (result.indexOf(sum) < 0) {
        result.push(sum);
      }
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

// 잘하는 분이 푼 방법
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  // Set의 객체의 '유일성'이라는 특징을 이용했다.
  //거기에 전개 연산자를 사용해 줬다.
  // 와..
  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
