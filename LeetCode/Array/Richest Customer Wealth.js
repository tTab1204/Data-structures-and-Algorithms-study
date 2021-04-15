var maximumWealth = function (accounts) {
  let temp = [];
  let sum = 0;

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    temp.push(sum);
    sum = 0;
  }
  return Math.max(...temp);
};
accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
maximumWealth(accounts);

// 다른 사람의 풀이
var maximumWealth = function (accounts) {
  var res = 0;
  for (var i = 0; i < accounts.length; i++) {
    var temp = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    // 여기서 계속 최댓값을 찾아준다.
    // 이런 생각도 할 줄 알아야 할 것 같다.
    res = Math.max(res, temp);
  }
  return res;
};
