var countNegatives = function (grid) {
  const height = grid.length;
  const width = grid[0].length;
  let r = height - 1;
  let c = 0;
  let res = 0;
  while (r >= 0 && c < width) {
    // 양수 or 0일때를 탐색
    if (grid[r][c] >= 0) {
      c++; // 다음 가로를 탐색
    }
    // 음수일 경우를 탐색
    else {
      res += width - c;
      r--;
    }
  }
  return res;
};

// 첫번째 반복문 돌 때는
// 1. else로 분기해서
// c = 0이라서 grid[i]의 1번째 요소를 탐색하는데
// 그게 이미 음수니까 내림차순 정렬이 되어 있으니
// 뒤에 나머지 4개도 다 음수다.
// 그래서 res에 그 4개를 다 더해준다.
// 마지막으로 r을 1 빼주고, grid[2]를 탐색하게 된다.

// 2. if로 분기해서
// 이건 양수라서 c를 1 더해서 뒤에 요소를 탐색해본다.
// 더해도 양수라서 또 1을 더한다. (c = 2인 상태)
// 드디어 음수를 찾아서 else로 분기
// res에다 2를 더해주고
// r을 또 1 빼줘서 grid[1]을 탐색하게 한다.

// 반복
// 그러다 r이 음수가 되거나, c가 4보다 커지는 순간이 반복문을 탈출할 시점이 된다.
grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
// 이런 생각은 못했을 것 같다. BS문제를 더 풀어보는게 맞을듯.

// 시간복잡도를 O(N^2)보다 낮게하는게 관건인듯

// Follow up: Could you find an O(n + m) solution?

// 겨우 이해했다.
