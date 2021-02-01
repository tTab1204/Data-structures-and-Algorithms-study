// 1. 2016년

// 못 풀어서 해결 방법을 봤다. 스스로 풀 때까지 ㄱㄱ
const solution = (a, b) => {
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let count_day = 0;
  for (let i = 0; i < a - 1; i++) {
    count_day += month[i];
  }
  count_day = count_day + b;
  let result = day[count_day % 7];
  return result;
};

//다른 풀이(JS 함수 이용)
const solution = (a, b) => {
  //new Date(year, monthIndex[ , day[ , hour [ , minutes [ , seconds [ , milliseconds ]]]]]);
  // a-1이유: monthIndex라서 0부터 시작하기 때문
  // slice: python처럼 문자열 자르기 가능
  let date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
};
