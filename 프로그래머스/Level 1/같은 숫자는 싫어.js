const solution = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
};

// 다른 사람 풀이
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
// filter를 더 적극적으로 사용하려는 시도를 해보자.
// filter 사용할 수 있을 것 같았는데 어떻게 쓰는지 몰랐으니
