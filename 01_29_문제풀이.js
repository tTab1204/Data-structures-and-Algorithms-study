//-------------------- 프로그래머스 문제 -----------------//
// 1. 두개 뽑아서 더하기

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

// 2. 완주하지 못한 선수

// 내가 푼 방법
function solution(participant, completion) {
  const answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return answer;
}

// 다른 사람이 푼 방법에는
// 해시 테이블을 이용하여 푼 문제가 있는데 아직 이해가 잘 안된다..

// 3. 문자열 다루기 기본
const solution = (s) => {
  let result = false;
  // 길이가 4 or 6인지 확인 + 숫자로만 구성되어있는지 확인
  if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
// isNan: 숫자가 있는지 확인해주는 함수, 있으면 false, 없으면 true이다.
// 정규 표현식도 나중에 익혀보자.

// 4. 문자열 내림차순 배치하기
const solution = (s) => {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
};

// split(배열로 쪼개고) - sort(정렬하고) - join(다시 합친다)
// 유의점: charCodeAt - 문자의 숫자코드를 알려주는 메소드 (이거 몰라서 못 풀었다..)

// 5. 문자열 내 마음대로 정렬하기
const solution = (strings, n) => {
  // 결국 이건 배열을 일정한 조건으로 재정렬 하는거다.
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
};

// 사전 순 정렬(localeCompare)을 몰라서 결국 못 푼 문제.. 라고 하기엔 다른 분들은 다 풀었네.
// 이번에 확실히 기억해두자!

// 모의고사
// 1번 수포자: 1,2,3,4,5 / .....
// 2번 수포자: (2,1),(2,3),(2,4),(2,5) / ....
// 3번 수포자: (3,3), (1,1), (2,2), (4,4), (5,5) / ....

//------------------- SWEA문제(기본 다지기) -----------------//
// JS 사용에 익숙해져보자.

// 1. 홀수만 더하기
const numbers = new Array(10);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sum += numbers[i];
  }
}
console.log(sum);

// 2. 평균값 구하기
const numbers2 = new Array(10);
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  sum2 += numbers2[i];
}
const result = sum2 / 10;

// 3. 큰 놈, 작은 놈, 같은 놈
var input1 = prompt("숫자 1을 입력하세요");
input1 = Number(input1);
var input2 = prompt("숫자 2를 입력하세요");
input2 = Number(input2);

if (input1 > input2) {
  console.log("input1이 더 크다");
} else if (input1 === input2) {
  console.log("같다.");
} else {
  console.log("input2가 더 크다");
}

// 4. 최대수 구하기
const numbers3 = new Array(10);
numbers3.sort((a, b) => a - b);
console.log(numbers3[9]);

// 5. 중간값 찾기
// n개의 숫자 만들어서 numbers배열에 넣기
function median() {
  let n = prompt("숫자를 입력하세요");
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
