// 또 혼자 못풀었다.
// 나중에 다시 풀자
const str1 = "ace";
const str2 = "abcde";

// two pointer 방식
const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;
  // i가 3보다 작을때
  while (i < s.length) {
    // 근데 만약 i는 3이 안됐는데 j가 5라면 그게 false다.
    if (j === t.length) {
      // false를 return 한다.
      return false;
    }
    // ??
    if (s[i] === t[j]) {
      // 여기서 i가 s.length(3)보다 커지면서 true를 반환한다.

      i++;
    }
    j++;
  }
  return true;
};

// 대단하다..
console.log(isSubsequence(s, t));

// 또 다른 포인터 풀이
// 더 짧아졌다!
var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) i++;
  }
  return i === s.length;
};

// Dynamic programming으로 하는 코드 아직 이해를 못했다.
