function solution(m, musicinfos) {
  for (let i = 0; i < musicinfos.length; i++) {}
}

// N진수 게임

function solution(n, t, m, p) {
  const answer = [];
  let temp = [];

  let i = 1;
  let num = 0;

  while(answer.length !== t) {
      if(!temp.length) {
          // n진법으로 변환한 숫자를 split('')해서 넣는다.
          temp = num.toString(n).split('')
          num++;
      }
      const nowNum = temp.shift();]
      if(i === p) answer.push(nowNum);
      i++
      if(i > m) i = 1;

  }
  return answer.map((v) => v.toUpperCase().join(''))
}
