// 스택, 큐에 해당하는 문제들

// 1. 기능개발(Lv.2)

// 다른 사람이 푼 방법
const solution = (progresses, speeds) => {
  let answer = [];
  let HowManyDays = [];
  for (let i = 0; i < progresses.length; i++) {
    let days = Math.ceil((100 - progresses[i]) / speeds[i]);
    HowManyDays.push(days);
  }
  while (temp.length > 0) {
    var first = temp.shift(); //shift가 queue에서 주로 사용!!
    var together = temp.findIndex((val) => val > first);
    if (together === -1) {
      answer.push(temp.length + 1);
      temp = [];
    } else {
      answer.push(together + 1);
      temp.splice(0, together);
    }
  }
  return answer;
};
// ex)
// progresses = [95, 90, 99, 99, 80, 99];
// speeds = [1, 1, 1, 1, 1, 1];
// HowManyDays = [5, 10, 1, 1, 20, 1];

solution(progresses, speeds);
// findIndex()
// 원하는 요소를 찾자마자 메서드를 종료함(뒤쪽 요소는 관심조차 주지도 않는다)
// 만족하는 요소가 없을 시 -1 반환

// Math.ceil (): 올림
// splice(2,1): 인덱스 2부터 1개 제거라는 뜻

// 다른 사람 코드를 이해하는 데만도 3시간이 넘게 걸렸다..
// 더 노력해보자..

const solution = (progresses, speeds) => {
  // 걸리는 날짜 배열 생성
  let HowManyDays = [];
  let answer = [];

  for (let i = 0; i < progresses.length; i++) {
    // 요소마다 걸리는 날짜 계산
    let days = Math.ceil((100 - progresses[i]) / speeds[i]);
    HowManyDays.push(days);
  }

  // 걸리는 날짜 배열이 0보다 클 때까지 루프
  while (HowManyDays.length > 0) {
    // queue에서 주로 사용?
    // 첫 인자를 하나씩 빼주면서
    let firstItem = HowManyDays.shift();

    // firstItem보다 더 큰 수가 있는지 확인
    let checkBiggerValue = HowManyDays.findIndex((value) => value > firstItem);

    // 더 이상 firstItem보다 큰 수가 없다면
    if (checkBiggerValue === -1) {
      answer.push(HowManyDays.length + 1);
      HowManyDays = [];
    } else {
      // firstItem보다 큰 수가 있다면

      // +1의 이유: shift()로 배열의 길이가 1씩 줄어들기 때문에
      answer.push(checkBiggerValue + 1);

      // splice()쓰는 이유: [10, 1, 1, 20]이라는 배열이 있다면, 10보다 큰 요소는 20이니까, checkBiggerValue는 shift로 인해 10이 빠지고 [1,1,20]의 배열에서 즉, 2번지에 있게 된다. 그래서 현재의 [1,1,20] 배열에서 [1,1]을 잘라내야 하기 때문에 0번지([1])부터 checkBiggerValue(2)=> 2개를 잘라내야 한다.
      HowManyDays.splice(0, checkBiggerValue);
    }
  }
  return answer;
};

// 또 다른 방법
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
// 지금은 이해가 안된다.. 나중에 또 봐보자.

// 2. K번째 수 (Lv-1)

// 못 풀었다.. 다시 풀기
const solution = (array, commands) => {
  let answer = [];

  // 1. commands의 길이 만큼 반복
  for (let i = 0; i < commands.length; i++) {
    // 2. 자르고  slice(시작점(이상), 끝점(미만)) => -1을 하는이유
    // 3. 정렬
    let list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });

    // 4. answer에 n번째 숫자 push
    // 3번째 => 2번지라는 뜻, 그러니까 -1
    answer.push(list[commands[i][2] - 1]);
  }

  return answer;
};

// 다시 풀어보기

const solution = (array, commands) => {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let slicedList = array.slice(commands[i][0] - 1, commands[i][1]);
    // [5,2,3,6]
    let sortedList = slicedList.sort((a, b) => a - b);
    // [2,3,5,6]

    answer.push(sortedList[commands[i][2] - 1]);
  }
  return answer;
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);

// 3. 평균 구하기
function solution(arr) {
  var answer = 0;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    answer = sum / arr.length;
  }

  return answer;
}

// 다른 사람의 방법
// reduce() 사용
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

var testArray = [1, 2, 3, 4, 5];
average(testArray);

// [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );

// 4. 문자열 내 p와 y의 개수
// 내 풀이
function solution(s) {
  var a = 0;
  var b = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") a++;
    if (s[i] === "y" || s[i] === "Y") b++;
  }

  return a === b ? true : false;
}

// 다른 사람의 방법
// reduce() 사용
function numPY(s) {
  // toUpperCase를 사용하면 됐었구나.. split은 못 쓸 줄 알았다.
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY"));
console.log(numPY("Pyy"));

// 5. 핸드폰 번호 가리기

const solution = (phoneNumber) => {
  let answer = "";

  for (let i = 0; i < phoneNumber.length; i++) {
    if (i < phoneNumber.length - 4) {
      answer += "*";
    } else {
      answer += phoneNumber[i];
    }
  }
  return answer;
};

// split - map - join 방법도 있던데.. 내일 더 알아보자.
