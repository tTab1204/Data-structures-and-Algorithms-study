function solution(seoul) {
  const whereIsKim = (item) => item === 'Kim';

  let index = seoul.findIndex(whereIsKim);
  let answer = `김서방은 ${index}에 있다`;
  return answer;
}

// 다른 사람의 풀이
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}

// 배열의 번지수는 indexOf함수로도 확인이 가능하다.
