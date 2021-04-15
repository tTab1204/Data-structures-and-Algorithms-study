// 1. 땅따먹기

// 동적 프로그래밍

//n행 4열로 이루어져있다 arr []3 //한행씩 내려올때 같은 열을 연속해서 밟을 수 없다.
//가장  큰 값을 찾는다.
function solution(land) {
  var answer = 0;
  let sum = 0;
  let index = 0;
  let indexValue = 0;
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (i === 0) {
        continue;
      } else {
        let arr = land[i - 1].slice();
        arr[j] = 0;
        land[i][j] += Math.max.apply(null, arr);
        sum = Math.max(land[i][j], sum);
      }
    }
  }
  return sum;
}

//아 모르겠다................ 집 가서 다시 ㄱㄱ
