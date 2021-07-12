// 또 혼자 못 풀었다................
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;

  for (let j = 0; i < g.length && j < s.length; j++) {
    // 아 여기서 i를 넘겨버리는구나 그냥
    // 이중 for문을 쓸 필요가 없었다..
    if (g[i] <= s[j]) i++;
  }
  return i;
};

// 또 다른 사람의 풀이
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let i = 0;
  let count = 0;
  let j = 0;
  while (i < s.length) {
    if (s[i] >= g[j]) {
      count++;
      j++; // 뭣만하면 pop, shift이런거 쓰려하지말고
    }
    i++; // 이렇게 index를 좀 움직여보자 멍청아 ㅠㅠㅠㅠㅠ
  }

  return count;
};
// 이게 이렇게 빠른 이유는?
