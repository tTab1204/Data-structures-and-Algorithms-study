// 풀었던 문제 다시풀기

// 1. 같은 숫자는 싫어
const solution = (arr) => {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }

  return answer;
};

// 2. 가운데 글자 가져오기
const solution = (s) => {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    s.length % 2 === 1
      ? (answer = s[Math.floor(s.length / 2)])
      : (answer = s[s.length / 2 - 1] + s[s.length / 2]);
  }
  return answer;
};

// 3. 타겟넘버 -> 모르겠음. 누군가 설명을 해줬으면 좋겠음.
function solution(numbers, target) {
  var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
  recur(0, 0);
  return answer;

  function recur(count, sum) {
    // leaf node 도착했을 때, 모든 numbers 탐색
    if (count === numbers.length) {
      // 주어진 조건에 만족하면 answer++
      if (sum === target) {
        answer++;
      }
      // 리턴해주어야함
      return;
    }

    // left child 는 +일 경우
    recur(count + 1, sum + numbers[count]);
    // right child 는 -일 경우
    recur(count + 1, sum - numbers[count]);
  }
}

// 4. 2016년
const solution = (a, b) => {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  let count_day = 0;
  for (let i = 1; i < a; i++) {
    count_day += month[i - 1];
  }
  count_day += b - 1; // 여기서 왜 -1을 하는걸까요?
  let result = day[count_day % 7];
  return result;
};
