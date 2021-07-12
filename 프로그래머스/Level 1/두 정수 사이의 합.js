// 1. 두 정수 사이의 합

// 내가 푼 방법
const solution = (a, b) => {
  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
  } else if (a === b) {
    return a;
  } else {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
    }
  }
  return sum;
};

// 가우스 법칙 이용
const solution = (a, b) => {
  let result = 0;

  result = ((a + b) * (Math.abs(a - b) + 1)) / 2;

  return result;
};

// 다른 방법(최솟값, 최댓값 함수 이용)
const solution = (a, b) => {
  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
    return sum;
  }
};
