// 너무 느렸다.. 풀긴 했는데 아쉽다
var sumOfUnique = function (nums) {
  const map = nums.reduce((a, c) => a.set(c, (a.get(c) || 0) + 1), new Map());
  //   console.log(map);
  //   console.log(map.keys());

  return [...map.keys()].reduce((acc, cur) => {
    if (map.get(cur) === 1) acc += cur;
    return acc;
  }, 0);
};
//nums = [1, 2, 3, 2]; // general case
// nums = [1, 1, 1, 1, 1];
nums = [1, 2, 3, 4, 5];
sumOfUnique(nums);

// 다른 사람의 풀이
// 이게 제일 빠르다.
var sumOfUnique = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    // 중복이 아니라면
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
      arr.push(nums[i]);
    }
  }
  // reduce로 누산
  return arr.reduce((a, b) => a + b, 0);
};

// 다른 사람의 풀이 2
// 똑같긴 한데, forEach를 사용했다는 점만 다르다.
// 이게 더 느린데?
var sumOfUnique = function (nums) {
  let result = [];
  nums.forEach(function (e) {
    if (nums.indexOf(e) == nums.lastIndexOf(e)) {
      result.push(e);
    }
  });
  return result.reduce((a, b) => a + b, 0);
};
