function solution(brown, yellow) {
  let sum = brown + yellow;
  let temp = [];
  // Math.floor를 사용한 이유: 정수값을 얻기 위해서
  for (let i = Math.floor(sum / 2); i > 0; i--) {
    if (sum % i !== 0) continue;

    let width = i;
    let height = sum / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

// sum의 가로길이 === width
// sum의 세로길이 === height

// yellow의 가로길이 === width - 2
// yellow의 세로길이 === height - 2

function solution(brown, yellow) {
  let sum = brown + yellow;

  // Math.floor를 사용한 이유: 정수값을 얻기 위해서
  for (let i = Math.floor(sum / 2); i > 0; i--) {
    // 약수가 아닌 건 continue를 이용해 체크하지 않는다.
    if (sum % i !== 0) continue;

    let width = i;
    let height = sum / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

// 다른 사람의 풀이
function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }
  return [x, i];
}
