const solution = (arr, divisor) => {
  const answer = arr.filter((item) => item % divisor === 0);
  if (answer.length) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
};

// filter함수는 모든 요소를 함수에 통과시켜 새로운 배열로 만들어낸다.
