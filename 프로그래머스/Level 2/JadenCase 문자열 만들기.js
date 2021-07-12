function solution(s) {
  // 1. 모든 단어의 첫 문자가 대문자

  // 한 글자 단위로 다 나누기
  let arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === ' ') arr[i] = arr[i].toUpperCase();
    else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

// 다른 사람의 풀이
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
// 이게 훨씬 깔끔. 이렇게 했으면 더 좋았을거다.
