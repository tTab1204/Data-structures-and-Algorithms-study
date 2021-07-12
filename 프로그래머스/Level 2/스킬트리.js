const solution = (skill, skill_trees) => {
  // skill을 배열로 만들기
  let newArr = skill.split('');

  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let str = skill_trees[i].split('').filter((item) => newArr.includes(item));

    // substring(n, m): n이상 m미만
    if (str.join('') === skill.substring(0, str.length)) count++;
  }
  return count;
};

let skill = 'CBD';
let skill_trees = ['BACDE', 'CBADF', 'AECB', 'BDA'];

solution(skill, skill_trees);

// 이해했다. 그래도 나중에 한번 더 풀어보기.

// 다른 사람의 풀이
function solution(skill, skill_trees) {
  function isCorrect(n) {
    // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
    let test = skill.split('');
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
// 지금 이해가 잘 안된다. 나중에 다시 ㄱㄱㄱ
