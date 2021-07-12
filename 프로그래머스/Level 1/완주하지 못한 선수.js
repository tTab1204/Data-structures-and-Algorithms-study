// 2. 완주하지 못한 선수

// 내가 푼 방법
function solution(participant, completion) {
  const answer = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return answer;
}

// 다른 사람이 푼 방법에는
// 해시 테이블을 이용하여 푼 문제가 있는데 아직 이해가 잘 안된다..
