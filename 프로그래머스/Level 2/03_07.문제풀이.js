// 풀었던 문제 다시풀기

// 1. 124 나라의 숫자

function solution(n) {
  let answer = "";

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = "1" + answer;
        n = Math.floor(n / 3);
        break;
      case 2:
        answer = "2" + answer;
        n = Math.floor(n / 3);
        break;
      case 0:
        answer = "4" + answer;
        n = n / 3 - 1;
        break;
    }
  }

  return answer;
}

// 2. 두 개 뽑아서 더하기

function solution(numbers) {
  const answer = [];

  // 1. numbers에서 서로 다른 두 수를 뽑아서 더하지만 리그가 아닌 토너먼트식 경기로 생각.
  // numbers[1] + numbers[2] == numbers[2] + numbers[1] 이기 때문임.

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// 다른 사람의 풀이
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}

// 3. 완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion.sort) {
      participant[i];
    }
  }
}

// {
//     "stanko": 1,
//     "ana": 1,
//     "mislav": 1
//   }

// Map(3) {"stanko" => 1, "ana" => 1, "mislav" => 1}

// 다른 풀이 (이거 이해해보기)
function solution(participant, completion) {
  const hash = {};

  for (let i of participant) {
    if (!hash[i]) hash[i] = 0;
    hash[i]++;
  }

  completion.forEach((i) => hash[i]--);

  for (let key in hash) if (hash[key]) return key;
}

// 해시로 푸는 것 이해했다!

// 3. 올바른 괄호

const solution = (s) => {
  let sum = 0;

  if (s[s.length - 1] === "(") return false;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? sum++ : sum--;
    // 순차적으로 탐색할 때, "(" 갯수를 ")"가 넘어서는 안된다.
    if (sum < 0) return false;
  }

  return sum === 0 ? true : false;
};

// 4. 문자열 내 마음대로 정렬하기

const solution = (strings, n) => {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
};

// 화살표 함수 중괄호, 괄호 쓸 때 확실히 구분하기.

// 이것도 다시 이해해보기. 내 생각으로는 못 푼거라서.

// 5. 같은 숫자는 싫어

// 중복제거? Set객체 이용?

const solution = (arr) => {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) temp.push(arr[i]);
  }
  return temp;
};

// 6. 두 정수 사이의 합
const solution = (a, b) => {
  let answer = [];

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer.push(i);
    }
  }

  const reducer = (a, b) => a + b;

  return answer.reduce(reducer);
};
