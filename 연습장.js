var countNegatives = function (grid) {
  let width = grid[0].length;
  let height = grid.length;

  let c = 0;
  let r = height - 1;
  let answer = 0;

  while (c < width && r >= 0) {
    // 양수일 때
    if (grid[r][c] >= 0) {
      // 뒤에 더 찾아주고
      c++;
    }

    // 음수일 때
    else {
      // 찾았으니 row를 바꿔주며 다시 찾아보자.
      answer = answer + (width - c);
      r--;
    }
  }
  return answer;
};
