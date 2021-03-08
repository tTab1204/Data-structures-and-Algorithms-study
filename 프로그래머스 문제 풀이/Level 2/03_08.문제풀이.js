// 풀었던 문제 다시풀기

// 1. 모의고사 (완전탐색)

const solution = (answers) => {
  const arr1 = [1, 2, 3, 4, 5]; // length = 5

  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5]; // length = 8

  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // length = 10

  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (arr1[i % 5] === answers[i]) count[0]++;

    if (arr2[i % 8] === answers[i]) count[1]++;

    if (arr3[i % 10] === answers[i]) count[2]++;
  }

  // 배열의 최댓값을 이런식으로 구할 수 있다. (전개연산자 + Math.max사용하여)
  let max = Math.max(...count);
  let result = [];
  for (let j = 0; j <= count.length; j++) {
    if (count[j] === max) {
      result.push(j + 1);
    }
  }
  return result;
};

// 이 문제는 나중에 한번 더 풀어봐야겠다.

// 2. 체육복
function solution(n, lost, reserve) {
  // 체육복 갯수를 담을 배열 생성
  let clothes = [];

  for (let i = 1; i <= n; i++) {
    // 일단 1개씩 체육복을 줘본다.
    clothes.push(1);

    //만약 여분의 체육복이 있는 학생이라면
    if (reserve.includes(i)) clothes[i - 1]++;

    //만약 체육복이 없는 학생이라면
    if (lost.includes(i)) clothes[i - 1]--;
  }
  // 이제 학생들의 체육복 개수를 다 파악했다.
  for (let i = 0; i < n; i++) {
    // 체육복을 잃어버린 학생에게
    if (clothes[i] === 0) {
      // 여벌의 체육복을 줘야 하잖아.
      // 근데 앞 or 뒤의 학생이 여벌의 체육복이 있어야 함.

      // 1. 뒤의 학생이 체육복이 있을 경우
      if (clothes[i + 1] === 2) {
        clothes[i]++;
        clothes[i + 1]--;
      }

      // 2. 앞의 학생이 체육복이 있을 경우
      if (clothes[i - 1] === 2) {
        clothes[i]++;
        clothes[i - 1]--;
      }

      // 그럼 이제 마지막으로 체육복 개수가 0보다 큰 학생들의 숫자를 구하면 됨.
    }
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (clothes[i] >= 1) answer++;
  }
  return answer;
}

// 3. 나누어 떨어지는 숫자 배열

const solution = (arr, divisor) => {
  let result = [];

  arr = arr.sort((a, b) => a - b);

  // 반복문 돌려서
  for (let i = 0; i < arr.length; i++) {
    // arr의 요소들 중 divisor랑 나누어 떨어지는게 있다면
    if (arr[i] % divisor === 0)
      // result배열에 arr[i]를 넣어준다.
      result.push(arr[i]);

    // 만약 나누어 떨어지는 요소가 없다면
  }
  if (result.length === 0) result.push(-1);
  return result;
};

// 4. 프린터

const solution = (priorities, location) => {
  let first_doc = 0;

  let answer = 1;

  while (priorities.length > 0) {
    // 1. 인쇄 대기목록의 가장 앞에 있는 문서를 priorities에서 꺼냅니다.
    first_doc = priorities.shift();

    // 2. first_doc이 가장 높은 우선순위가 아닐 경우
    if (priorities.some((item, i) => item > first_doc)) {
      // first_doc를 대기목록의 가장 마지막에 넣습니다.
      priorities.push(first_doc);
    }

    // 3. first_doc이 가장 높은 우선순위일 경우
    else {
      // 사용자가 선택한 문서가 first_doc인데
      // 가장 높은 우선 순위일 경우
      if (location === 0) {
        break;
      }
      //  사용자가 선택한 문서가 first_doc은 아닌데
      //  가장 높은 우선순위일 경우
      else {
        answer++;
      }
    }

    // 사용자가 선택한 문서(location)의 index가 0인데 중요도가 제일 높은게 아닌 경우
    if (location === 0) {
      // 현재 대기목록의 맨 끝으로 index를 옮긴다.
      location = priorities.length - 1;
    }
    // 사용자가 선택한 문서(location)의 index가 0이 아닌데 중요도가 제일 높은게 아닌 경우
    else {
      location--;
    }
  }
  return answer;
};

// 다시 풀어야 할 것 2번째
