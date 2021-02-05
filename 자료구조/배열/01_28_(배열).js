//---------------------배열----------------------//

// 1. 문자열 거꾸로 만들기

// 강의에서 나온 방법

// 방법 1
function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

// 방법 2
// 훨씬 간단하다!
function reverse2(str) {
  return str.split("").reverse().join("");
}

// 방법 3
// 전개 연산자 쓰는거 진짜 와..말도안된다 진짜..어떻게 생각하냐
const reverse3 = (str) => [...str].reverse().join("");

reverse("Helllo!!!!");
reverse("Hi my name is blah blah");
reverse3("Blahblahblahablahalabalh");

// 2. 정렬된 배열 병합

// 내가 풀어본 방법

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

const mergeSortedArrays = (arr1, arr2) => {
  // 1) 먼저 concat으로 합치고
  const newArr = arr1.concat(arr2);

  // 2) sort로 정렬하기
  // sort 함수는 compareFunction이 없으면 각 요소를 문자열로
  // 인식한다. 따라서 아래와 같은 비교 함수를 넣어줘야 한다.
  const perfectArr = newArr.sort((a, b) => a - b);
  return perfectArr;
};

mergeSortedArrays(array1, array2);

// 강의에서 나온 방법
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

//--------------------- 문제풀기 --------------------//
// 1. Two Sum(두개의 합 구하기)

// 내가 풀어본 방법
const nums = [3,3];
const target = 6;

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

twoSum(nums, target);
