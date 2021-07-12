// 6. 수박수박수박수?

// 내가 푼 방법
const solution = (n) => {
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += '수';
    }

    if (i % 2 === 1) {
      answer += '박';
    }
  }
  return answer;
};

// 다른 사람의 풀이
function waterMelon(n) {
  var result = '수박';
  result = result.repeat(n - 1).substring(0, n);
  //함수를 완성하세요
  return result;
}

// repeat(): 문자열을 정해진 횟수만큼 반복시킨다.
// substring(a, b): a부터 b까지 문자열을 반환한다.
