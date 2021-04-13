var reverseString = function (s) {
  return s.reverse();
};

// 다른 사람의 풀이
// Two pointers를 이용한 풀이
var reverseString = function (s) {
  var reversedStr = "";
  var high = s.length - 1;

  for (var i = high; i >= 0; i--) {
    // charAt() 함수는 문자열에서 특정 인덱스에 위치하는  유니코드 단일문자를 반환합니다.
    reversedStr += s.charAt(i);
  }
  return reversedStr;
};
