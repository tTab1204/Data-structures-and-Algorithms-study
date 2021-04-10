// [5,10,20]으로 lemonade를 살 수 있다.
// lemonade는 개당 5달러인데, 한개밖에 못 산다.
// 반드시 맞는 거스름돈을 줘야한다.

// 혼자 못 풀었다.
// 좀 더 연습해보자.. Easy도 못 풀겠다 ㅠㅠ
// 새로 배열 만들어서 push해주거나 그럴 필요 없다.
// 어차피 개수만 알고 있으면 되는거니까. 개수를 저장할 변수만 만들면 된다.
// 이 부분 이해하자!

var lemonadeChange = function (bills) {
  let five = 0; // 5달러의 개수
  let ten = 0; // 10달러의 개수

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++;
    // 10달러를 받았는데 5달러짜리가 거스름돈으로 있을 때
    else if (bills[i] === 10 && five > 0) {
      ten++;
      five--;
    }
    // 20달러를 받았는데 10달러짜리가 거스름돈으로 있을 때
    else if (bills[i] === 20 && ten > 0 && five > 0) {
      ten--;
      five--;
    }
    // 20달러를 받았는데 5달러짜리가 3개이상 있을 때
    else if (bills[i] === 20 && five > 2) five -= 3;
    else return false;
  }
  return true;
};

// 다른사람의 풀이
// 깔끔한 코드
const lemonadeChange = (bills) => {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    if (i === 5) five++;
    else if (i === 10) {
      five--;
      ten++;
    } else if (ten > 0) {
      ten--;
      five--;
    } else five -= 3;
    if (five < 0) return false;
  }
  return true;
};
