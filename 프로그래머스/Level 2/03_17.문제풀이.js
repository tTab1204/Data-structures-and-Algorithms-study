// 1. 카펫

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
// 세로가 1일 경우는 없으니까 3부터 구한 경우. 처음 내가 생각했던 방식과 같다.
// 비슷한 풀이

// 2. 소수찾기

// 1. [0, 1, 1] 로 만들 수 있는 모든 경우의 수 구하기 => 순열
// 2. 근데 중복이 있으니(1) 중복 체크까지

const solution = (numbers) => {};
// ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ모르겠다

// 2. H-Index

// 1 .배열을 내림차순으로 정렬
// 2. 인덱스 번호[배열 인덱스 + 1] <= 배열요소(배열[i])의
// 조건을 만족하는 마지막 인덱스가 H-index다.
function solution(citations) {
  citations = citations.sort((a, b) => b - a);

  let i = 1;
  // 왜 i=1을 해주는거지? 0이 아니고?
  while (i <= citations[i - 1]) i++;
  return i - 1;
}

// 나중에 다시 풀자. 모르겠다...

// 3. 방문 길이
function solution(dirs) {
  // 일반적인 탐색문제처럼 (i, j)좌표를 방문했는지 안했는지 판별하는게 아니라,
  // 해당 경로를 사용했는지 안했는지 판별해야되기 때문에,
  // 매번 가는방향과 오는방향 (src x, src y, dstn x, dstn y), (dstn x, dstn y, src x, src y) 좌표 쌍을 저장하고,
  // 동일한 튜플이 있는지 판별하는식으로 구현해야 합니다.
}

// 이건 아예 손을 못 대겠다. 나중에 다시 풀자.

// 4. JadenCase 문자열 만들기
function solution(s) {
  // 1. 모든 단어의 첫 문자가 대문자

  // 한 글자 단위로 다 나누기
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === " ") arr[i] = arr[i].toUpperCase();
    else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

// 다른 사람의 풀이
function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
// 이게 훨씬 깔끔. 이렇게 했으면 더 좋았을거다.

// 5. 땅따먹기

function solution(land) {
  let sum = 0;

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      max = Math.max(land[i]);
    }
  }

  land.forEach((item, i) => {
    for (let j = 0; j < item.length; j++) {
      max = Math.max(item);
    }
  });
}
5, 8, 4;

// 행의 개수 N: land.length
// ???????????????? 나중에 다시 풀자.. 또 못 풀었다..
