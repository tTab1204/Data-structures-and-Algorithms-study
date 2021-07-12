function solution(arr1, arr2) {
  var answer = [];

  for (var i = 0; i < arr1.length; i++) {
    var temp = [];
    for (var j = 0; j < arr2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < arr1[i].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }

    answer.push(temp);
  }

  return answer;
}
