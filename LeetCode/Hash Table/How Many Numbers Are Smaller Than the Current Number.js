var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  // 진짜 이런 생각 못했을 것 같다.
  return nums.map((num) => sorted.indexOf(num));
};

// 시간복잡도: O(N^2)

// 0: indexOf(8) -> sorted에서 해당 인덱스는? 4
// 1: indexOf(1) -> 0
// 2: indexOf(2) -> 1
// 3: indexOf(2) -> 1
// 4: indexOf(3) -> 3

smallerNumbersThanCurrent(nums);

// Complexity:
// Time O(NlogN)
// Space O(N)

// 다른 사람의 풀이

//Array.from(): 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1); // sorted = [8,3,2,2,1]
  const map = new Map(
    sorted.map((num, index) => [num, nums.length - index - 1])
    // nums.length - index - 1 생각한거 매우 대단하다

    // [8, 5-0-1]  -> 여기서 대괄호는 뭘까 그럼?
    // [3, 5-1-1]
    // ....
    // map: {8:4,3:3,2:1,1:0}
  ); // map객체로 만들어서 바로 map method사용
  console.log(map.keys());
  return nums.map((num) => map.get(num));
}

nums = [8, 1, 2, 2, 3];
smallerNumbersThanCurrent(nums);

// 이해 됐다
