function solution(arr) {
  var answer = 0;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    answer = sum / arr.length;
  }

  return answer;
}

// 다른 사람의 방법
// reduce() 사용
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

var testArray = [1, 2, 3, 4, 5];
average(testArray);

// [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
