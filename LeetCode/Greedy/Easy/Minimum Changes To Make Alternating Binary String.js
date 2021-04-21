// 혼자 못 풀었다.

var minOperations = function (s) {
  // index가 짝수면 무조건 s[0]에 해당하는 숫자가 나와야 하고
  // else면 그냥 전부 반대되는 숫자가 나와야 함

  let chars = ["1", "0"]; // 아 이게 어차피 요소가 두개니까 무한반복(0,1)이구나.
  // chars[0] = "1"
  // chars[1] = "0"
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // 이렇게 맞는 count를 다 찾아서 더하다 보니까
    if (chars[i % 2] === s[i]) count++;
  }
  // minimum number of operations needed to make s alternating.
  // '최소의 개수'를 구해라 했으니 Math.min으로 비교하면 된다.
  // 이런 생각은 어떻게 하냐..
  return Math.min(count, s.length - count);
};

s = "100101000101001010010000010011101011000";
minOperations(s);
