function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  }

  let minNum = Math.min.apply(null, arr);
  let minOfIndex = arr.indexOf(minNum);
  arr.splice(minOfIndex, 1);
  return arr;
}
