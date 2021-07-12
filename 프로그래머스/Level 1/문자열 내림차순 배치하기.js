// 4. 문자열 내림차순 배치하기
const solution = (s) => {
  return s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
};
