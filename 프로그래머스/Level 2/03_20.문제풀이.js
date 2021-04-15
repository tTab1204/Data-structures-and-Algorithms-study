// 1. 영어 끝말잇기

// 혼자서 못 풀었다.

function solution(n, words) {
  // 중복 지점을 담는 변수
  let dup = 0;

  for (let i = 1; i < words.length; i++) {
    // 탈락 조건 두개 검사
    if (
      // 중복검사 + 마지막 글자 !== 첫글자일 경우
      // indexOf는 무조건 가장 처음 발견한 문자열의 인덱스를 반환한다.

      // 이렇게 검사를 하니 굳이 2중 for문을 쓸 필요가 없었다.
      words.indexOf(words[i]) !== i ||
      words[i - 1][words[i - 1].length - 1] !== words[i][0]
    ) {
      dup = i + 1;
      break;
    }
  }

  let stupid = dup % n;
  if (!stupid) stupid = n;
  let order = Math.ceil(dup / n);

  return dup ? [stupid, order] : [0, 0];
}

// i를 0부터 시작하게 하면 i-1에서 -1번지를 탐색하게 된다. 따라서 계속 오류가 났었는데
// 주의하자..

// 그니까, words[i]가 "tank"라면, indexOf로 찾았을 때 당연히 !! 0 !! 으로 나올거다.
// 그래서 현재의 인덱스(i)와 indexOf로 찾은 0이 다르게 나타난다면, 이미 앞에 중복된 값이
// 있다는 것이다.

//

// 2. 가장 큰 수

// 혼자 못 풀었다.

// 두 가지 방법이 있다.

// 1. 정렬을 진행하면서 두 수의 앞 뒤 자리를 바꿔가며 비교한다.
// ex) "6"과 "10"이 있을 때 "610"과 "106"을 만들어서 두 값을 비교 후 최대값을 리턴해서
// 넣다보면 "6210"을 출력할 수 있다.
function solution(numbers) {
  let answer = "";

  numbers = numbers.map((item) => item + "").sort((a, b) => b + a - (a + b));

  numbers[0] === "0" ? (answer += 0) : (answer = numbers.join(""));
  return answer;
}

// 2. 강제로 네 자리수를 만들어 비교한다. 제약사항을 보면 0 <= numbers의 원소 <= 1000
// 인 정수다. 최댓값이 1000의 자리인 네 자리이기 때문에 네 자리수를 만들어야 한다.
// ex) [6,10,2]를 입력 받았다면, [6666, 1010, 2222]로 만들어서
// 이 값들을 내림차순으로 비교하면 [6666, 2222, 1010]이 된다. 이 네 자리 수의 원래 값은
// [6,2,10]이므로 문자열로 변환하면 "6210"이 된다.

// 말은 이해가 되는데 코드로 구현이 어렵다..
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {}
}

// 3. 점프와 순간이동

// 혼자 못 풀었다.

// n 위치에서 0으로 갈 때 순간이동이
// 가능하지 못한 순간에 1칸씩만 점프를 뛰면 되는데,
// 이 과정이 주어진 수를 이진화 했을 때 1의 개수를 구하는 과정과 동일

// 아직은 모르겠다 나중에 다시 ㄱㄱ

function solution(n) {}

// 지금부터 Level 2 풀었던 문제들 다시 풀기

// 4. 구명보트
function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);

  let first = 0;
  let last = people.length - 1;
  let boat = 0;
''
  while (first <= last) {
    // 구명보트에 2명 탈 수 있는 경우
    if (sortedPeople[first] + sortedPeople[last] <= limit) first++;
    // 탈 수 없는 경우
    last--;
    boat++;
  }
  return boat;
}

sortedPeople = [50, 50, 70, 80];
limit = 100;

solution(people, limit);
