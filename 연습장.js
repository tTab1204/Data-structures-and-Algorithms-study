var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let cnt = 0;
  let i = 0;
  let j = 0;
  // 반복문을 돌자
  // 어차피 s 다 돌면 더 이상 g를 돌 필요가 없기 때문이당
  while (i < s.length) {
    if (s[i] >= g[j]) {
      cnt++;
      j++;
    }
    i++;
  }
  return cnt;
};
