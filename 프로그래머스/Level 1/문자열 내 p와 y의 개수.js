// 내 풀이
function solution(s) {
  var a = 0;
  var b = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') a++;
    if (s[i] === 'y' || s[i] === 'Y') b++;
  }

  return a === b ? true : false;
}

// 다른 사람의 방법
// reduce() 사용
function numPY(s) {
  // toUpperCase를 사용하면 됐었구나.. split은 못 쓸 줄 알았다.
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
