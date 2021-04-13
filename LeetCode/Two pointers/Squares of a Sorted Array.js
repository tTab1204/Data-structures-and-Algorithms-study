var sortedSquares = function (nums) {
  let answer = nums.map((item) => {
    if (item < 0) item *= -1;
    item *= item;
    return item;
  });
  // map(): 중괄호로 감쌌을 경우에는 item을 return 해줘야 한다.

  return answer.sort((a, b) => a - b);
};

// 다른 사람의 풀이
// two pointers solution
var sortedSquares = function (A) {
  let result = [];
  let l = 0;
  let r = A.length - 1;
  let p = r;

  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      result[p--] = A[l++] ** 2;
    } else {
      result[p--] = A[r--] ** 2;
    }
  }

  return result;
};
// 이해하긴 했는데 Two pointers에 더 익숙해져야겠다.
