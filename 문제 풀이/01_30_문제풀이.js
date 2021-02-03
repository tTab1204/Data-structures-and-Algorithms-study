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

// 2. 나누어 떨어지는 숫자 배열
const solution = (arr, divisor) => {
  const answer = arr.filter((item) => item % divisor === 0);
  if (answer.length) {
    return answer.sort((a, b) => a - b);
  } else {
    return [-1];
  }
};

// filter함수는 모든 요소를 함수에 통과시켜 새로운 배열로 만들어낸다.

// 3. 소수 찾기 (해결 X)

// 내가 푼 방법 (타임아웃..)
const solution = (n) => {
  let result = [];
  let PrimeNumber = 0;
  // 1과 자신을 제외한 정수 중에 나눠지는 정수가 있는지 체크

  for (let i = 1; i <= n; i++) {
    PrimeNumber = 1;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        PrimeNumber = 0;
      }
    }
    if (PrimeNumber) {
      result.push(i);
    }
  }

  return result.length - 1;
};

// 다른 사람이 푼 방법 (Set + 에라토스테네스의 체 이용)
// Set의 유일성이라는 부분을 이용
function useSet(n) {
  const set = new Set();

  for (let i = 2; i <= n; i++) {
    set.add(i);
  }
  for (let i = 2; i <= n; i++) {
    // 각 수의 배수를 찾는 반복문..
    // 이런 식으로 반복문을 구현할 수도 있다는 걸 생각하자.
    for (let j = 2 * i; j <= n; j = j + i) {
      set.delete(j);
    }
  }
  return set;
}

function solution(n) {
  let count = useSet(n).size;
  return count;
}

// 근데 이것도.. 효율성이 안 좋게 나온다. 어떻게 해결해야 할까

// 4. 가운데 글자 가져오기

const solution = (s) => {
  if (s.length % 2 === 0) {
    let answer = s.substr(s.length / 2 - 1, 2);
    return answer;
  }

  if (s.length % 2 === 1) {
    let answer = s.substr(s.length / 2, 1);
    return answer;
  }
};

// substr(): 문자열을 가져오는 메소드
// strings.substr(시작점, 길이)

// 5. 같은 숫자는 싫어

const solution = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

// 다른 사람 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
// filter를 더 적극적으로 사용하려는 시도를 해보자.
// filter 사용할 수 있을 것 같았는데 어떻게 쓰는지 몰랐으니

// 6. 수박수박수박수?

// 내가 푼 방법
const solution = (n) => {
  let answer = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    }

    if (i % 2 === 1) {
      answer += "박";
    }
  }
  return answer;
};

// 다른 사람의 풀이
function waterMelon(n) {
  var result = "수박";
  result = result.repeat(n - 1).substring(0, n);
  //함수를 완성하세요
  return result;
}

// repeat(): 문자열을 정해진 횟수만큼 반복시킨다.
// substring(a, b): a부터 b까지 문자열을 반환한다.

// 7. 정수 내림차순으로 배치하기
const solution = (n) => {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

solution(182283);

const solution = (s) => {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
};
