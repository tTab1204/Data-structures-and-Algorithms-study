// 다른 사람의 풀이
// 혼자 못 풀었다.
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // charAt() 함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환합니다.
    let c = s.charAt(i);

    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        // ), }, ] => 괄호를 닫는 경우를 모두 포함
        if (c !== stack.pop()) return false; // example 3을 판별할 수 있는 부분 = 내가 놓친 부분
    }
  }
  return stack.length === 0;
};
s = "{[]}";
isValid(s);
