// Map과 Object의 차이점
// 더 자세한 정보: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
const a = new Map();
const b = new Set();
// 1. Object는 key값으로 String형태만 저장할 수 있지만,
// Map은 어떤 데이터 타입으로든 가능하다.

// 2. Object는 순서가 없다.
// 그러나 Map의 key는(정렬됨) 삽입 순서가 있다!!

// 3. Set객체의 특징
// 어떤 값은 그 Set 콜렉션 내에서 유일하다.

//--------------------------해시 테이블---------------------------//

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// 내가 푼 방법
function RepeateCharacter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

// 강의에서 보여준 다른 방법
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]);
