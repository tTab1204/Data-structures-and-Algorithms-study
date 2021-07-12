const solution = (array, commands) => {
  let answer = [];

  // 1. commands의 길이 만큼 반복
  for (let i = 0; i < commands.length; i++) {
    // 2. 자르고  slice(시작점(이상), 끝점(미만)) => -1을 하는이유
    // 3. 정렬
    let list = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
    });

    // 4. answer에 n번째 숫자 push
    // 3번째 => 2번지라는 뜻, 그러니까 -1
    answer.push(list[commands[i][2] - 1]);
  }

  return answer;
};

// 다시 풀어보기

const solution = (array, commands) => {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let slicedList = array.slice(commands[i][0] - 1, commands[i][1]);
    // [5,2,3,6]
    let sortedList = slicedList.sort((a, b) => a - b);
    // [2,3,5,6]

    answer.push(sortedList[commands[i][2] - 1]);
  }
  return answer;
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
