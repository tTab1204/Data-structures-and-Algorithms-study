// 3. 문자열 다루기 기본
const solution = (s) => {
  let result = false;
  // 길이가 4 or 6인지 확인 + 숫자로만 구성되어있는지 확인
  if ((s.length === 4 || s.length === 6) && !isNaN(s)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
// isNan: 숫자가 있는지 확인해주는 함수, 있으면 false, 없으면 true이다.
// 정규 표현식도 나중에 익혀보자.
