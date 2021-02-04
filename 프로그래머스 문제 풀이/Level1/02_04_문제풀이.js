// 1. 서울에서 김서방 찾기

// 내 풀이
function solution(seoul) {
  const whereIsKim = (item) => item === "Kim";

  let index = seoul.findIndex(whereIsKim);
  let answer = `김서방은 ${index}에 있다`;
  return answer;
}

// 다른 사람의 풀이
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// 배열의 번지수는 indexOf함수로도 확인이 가능하다.

// 2. 콜라츠 추측
function solution(num) {
  let count = 0;

  while (num > 1) {
    if (count >= 500) {
      return -1;
    }

    if (num % 2) {
      num = num * 3 + 1;
    } else if (num === 1) {
      return num;
    } else {
      num /= 2;
    }
    count++;
  }
  return count;
}

// 다른 사람의 풀이
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
// 삼항연산자 깔-끔

// 3. x만큼 간격이 있는 n개의 숫자

// 내 풀이
function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    x = x * i;
    answer.push(x);
    x = x / i;
  }
  return answer;
}

// 다른 사람의 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
// map함수를 씁시다..

// 4. 자연수 뒤집어 배열로 만들기

// 내 풀이
function solution(n) {
  let array = String(n).split("").reverse();

  let answer = array.map((item) => Number(item));
  return answer;
}

//다른 사람의 풀이
function solution(n) {
  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);

    // 이 부분은 대체 어떻게 생각한거지..?
    n = Math.floor(n / 10);

    // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
    // 내림..의 느낌
  } while (n > 0);

  return arr;
}

// 5. 하샤드 수

// 내 풀이
function solution(x) {
  let sum = 0;
  let answer = false;

  let array = String(x).split("");
  array.map((item) => (sum += Number(item)));

  return (answer = x % sum ? false : true);
}

// 6. 시저 암호
const solution = (str, n) => {
  var ascVal = 0;
  return str
    .split("")
    .map((value) => {
      // 입력 받은 문자열을 한문자씩 나눈
      if (value === " ") return " "; // 입력 받은 문자열이 ' '인 경우 ' '을 return 한다.

      ascVal = value.charCodeAt(0); // ASCII값이 저장된다.

      if (90 >= ascVal && ascVal >= 65) {
        // 변환된 ASCII값의 범위를 A ~ Z 한정한다. (대문자)
        return ascVal + n > 90 // n 만큼 민 값이 Z(90)이 넘는지 확인
          ? String.fromCharCode(ascVal + n - 90 + 64) // 넘어가는 경우, 초과값에 +64 하여 반환
          : String.fromCharCode(ascVal + n); // 넘지않는 경우 ascVal를 n만큼 밀고 값을 반환
      } else if (122 >= ascVal && ascVal >= 97) {
        // 변환된 ASCII값의 범위를 a ~ z 한정한다. (소문자)
        return ascVal + n > 122 // n 만큼 민 값이 z(122)이 넘는지 확인
          ? String.fromCharCode(ascVal + n - 122 + 96) //넘어가는 경우, 초과값에 +122하여 반환
          : String.fromCharCode(ascVal + n); // 넘지않는 경우 ascVal를 n만큼 밀고 값을 반환
      }
    })
    .join("");
  // str을 split('') 해줬기 때문에, [ 'a', 'b' ]와 같은 형태로 존재한다.
  // 최종값의 반환을 위해서는 'ab'와 같은 형태로 만들어 주어야 한다.
};

// ASCII 코드를 알아야 함. 못풀었으니 다시 풀기

// 다른 사람의 풀이

function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) {
      index -= textArr.length;
    } else {
      answer += textArr[index];
    }
    return answer;
  }
}
// 이해하기 어려움.
// ASCII 코드 몰라도 풀 수 있었다.. 더 공부하자.

// 7. 이상한 문자 만들기
function solution(s) {
  let array = s.split(" ");

  return array
    .map((item) => {
      //result가 여기 있으니 되긴했는데..왜 여기 있어야 되는거지?
      let result = "";
      for (let i = 0; i < item.length; i++) {
        if (i % 2) {
          result += item[i].toLowerCase();
        } else {
          result += item[i].toUpperCase();
        }
      }
      return result;
    })
    .join(" ");
}

// 8. 크레인 인형뽑기 게임(2019 카카오 개발자 겨울 인턴십)
// https://in-future.tistory.com/88 시간 내에 못 풀었으니 내일 참조하기
function solution(board, moves) {}
