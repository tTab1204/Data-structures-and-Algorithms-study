var runningSum = function (nums) {
  let sums = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sums[i] = sum;
  }
  return sums;
};

// 다른 사람의 풀이
var runningSum = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // nums[i] += nums[i - 1];
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};

// 이런 생각도 할 수 있구나

// reduce()
// reduce 함수의 4개의 인자
// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

const runningSum = (nums) => {
  // accumulator를 저런 식으로(+=) 이렇게 쓸 수도 있구나
  // 실제 응용하기는 생각보다 힘들듯

  // 한번 반복문 돌때마다 accumulator가 있는 원소들을 다 합쳐버린다.
  // 이해 됐다 굿
  nums.reduce((accumulator, c, i, arr) => (arr[i] += accumulator));

  return nums;
};
