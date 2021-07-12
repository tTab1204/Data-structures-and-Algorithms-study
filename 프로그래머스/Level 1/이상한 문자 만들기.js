function solution(s) {
  let array = s.split(' ');

  return array
    .map((item) => {
      //result가 여기 있으니 되긴했는데..왜 여기 있어야 되는거지?
      let result = '';
      for (let i = 0; i < item.length; i++) {
        if (i % 2) {
          result += item[i].toLowerCase();
        } else {
          result += item[i].toUpperCase();
        }
      }
      return result;
    })
    .join(' ');
}
