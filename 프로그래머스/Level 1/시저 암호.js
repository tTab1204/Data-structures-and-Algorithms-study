const solution = (str, n) => {
  var ascVal = 0;
  return str
    .split('')
    .map((value) => {
      // 입력 받은 문자열을 한문자씩 나눈
      if (value === ' ') return ' '; // 입력 받은 문자열이 ' '인 경우 ' '을 return 한다.

      ascVal = value.charCodeAt(0); // ASCII값이 저장된다.

      if (90 >= ascVal && ascVal >= 65) {
        // 변환된 ASCII값의 범위를 A ~ Z 한정한다. (대문자)
        return ascVal + n > 90 // n 만큼 민 값이 Z(90)이 넘는지 확인
          ? String.fromCharCode(ascVal + n - 90 + 64) // 넘어가는 경우, 초과값에 +64 하여 반환
          : String.fromCharCode(ascVal + n); // 넘지않는 경우 ascVal를 n만큼 밀고 값을 반환
      } else if (122 >= ascVal && ascVal >= 97) {
        // 변환된 ASCII값의 범위를 a ~ z 한정한다. (소문자)
        return ascVal + n > 122 // n 만큼 민 값이 z(122)이 넘는지 확인
          ? String.fromCharCode(ascVal + n - 122 + 96) //넘어가는 경우, 초과값에 +122하여 반환
          : String.fromCharCode(ascVal + n); // 넘지않는 경우 ascVal를 n만큼 밀고 값을 반환
      }
    })
    .join('');
  // str을 split('') 해줬기 때문에, [ 'a', 'b' ]와 같은 형태로 존재한다.
  // 최종값의 반환을 위해서는 'ab'와 같은 형태로 만들어 주어야 한다.
};

// ASCII 코드를 알아야 함. 못풀었으니 다시 풀기

// 다른 사람의 풀이

function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) {
      index -= textArr.length;
    } else {
      answer += textArr[index];
    }
    return answer;
  }
}
