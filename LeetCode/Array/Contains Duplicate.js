// 중복검사
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  let answer = false;

  // 객체(set)크기는 size다 !!!!!!!!!!!!!!!!!!
  if (set.size !== nums.length) answer = true;

  return answer;
};
