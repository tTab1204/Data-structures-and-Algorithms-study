const solution = (n) => {
  return parseInt(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
};

solution(182283);

const solution = (s) => {
  return s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
};
