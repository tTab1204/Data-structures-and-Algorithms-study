function solution(n, words) {
  let dup = 0; // 중복지점
  let stupid = 0; // 걸린 사람
  let order = 0; // 몇번째 차례인지 구하려고

  for (let i = 0; i < words.length; i++) {
    let subArr = words.slice(0, i);

    // 탈락조건 1 (끝이 다른 글자를 말했을 때)
    if (words[i - 1].substring(words[i - 1].length - 1) !== words[i][0]) {
      dup = i;
      break;
    }

    // 탈락조건 2 (말했던 단어 또 말했을 때 = 중복일 때)
    if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
      dup = words.lastIndexOf(words[i]); // 이게 인덱스를 찾아주니까

      break;
    }
  }
  stupid = (dup % n) + 1;
  order = Math.ceil(dup + 1 / n);
  return [stupid, order];
}

// 답은 [stupid, count] 형식으로 나와야 한다.
// 탈락조건 2(나온 단어 또 말했을 때)
// 1. 그니까 중복되는 요소가 있을 때를 구하고
// 2. 그게 몇번째 사람인지 구하고
// 3. 그게 몇번째 배열에서 탈락하는지 구한다.

// 탈락조건 1(끝 글자랑 첫번째 글자랑 다른 경우)
// words[i][j.length -1] !== words[i+1][0]

// 그 외의 조건은 성공, 그럴 떈 [0, 0]을 return 한다.

// 거의 다 푼 것 같은데.. 나중에 다시 하자.

// 혼자서 못 풀었다.

function solution(n, words) {
  // 중복 지점을 담는 변수
  let dup = 0;

  for (let i = 1; i < words.length; i++) {
    // 탈락 조건 두개 검사
    if (
      // 중복검사 + 마지막 글자 !== 첫글자일 경우
      // indexOf는 무조건 가장 처음 발견한 문자열의 인덱스를 반환한다.

      // 이렇게 검사를 하니 굳이 2중 for문을 쓸 필요가 없었다.
      words.indexOf(words[i]) !== i ||
      words[i - 1][words[i - 1].length - 1] !== words[i][0]
    ) {
      dup = i + 1;
      break;
    }
  }

  let stupid = dup % n;
  if (!stupid) stupid = n;
  let order = Math.ceil(dup / n);

  return dup ? [stupid, order] : [0, 0];
}

// i를 0부터 시작하게 하면 i-1에서 -1번지를 탐색하게 된다. 따라서 계속 오류가 났었는데
// 주의하자..

// 그니까, words[i]가 "tank"라면, indexOf로 찾았을 때 당연히 !! 0 !! 으로 나올거다.
// 그래서 현재의 인덱스(i)와 indexOf로 찾은 0이 다르게 나타난다면, 이미 앞에 중복된 값이
// 있다는 것이다.
