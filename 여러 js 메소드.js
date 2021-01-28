// indexOf
const arrayIndexOf = [1, 2, 3];
console.log(arrayIndexOf.indexOf(2)); // 1
console.log(arrayIndexOf.indexOf(5)); // -1

// push
const arrayPush = [1, 2, 3];
arrayPush.push(4); // array = [1, 2, 3, 4]

// pop
const arrayPop = [1, 2, 3];
arrayPop.pop(); // array = [1, 2]

// length
const arrayLength = [1, 2, 3];
console.log(arrayLength.length); // 3

// shift: 배열 첫번째 요소를 제거
const arrayTest = ["a", "b", "c"];
arrayTest.shift(); // 'a'
console.log(arrayTest); // ['b', 'c']

// concat: 두개의 배열을 합쳐서 새 배열로 반환
const arrayConcat = [1, 2, 3];
console.log(arrayConcat.concat(4)); // [1, 2, 3, 4]
console.log(arrayConcat.concat(["a", "b", "c"])); // [1, 2, 3, 'a', 'b', 'c']

// join: 배열 요소 사이에 문자를 삽입하여 문자열로 반환
const arrayJoin = [1, 2, 3, 4, 5];
console.log(arrayJoin.join("/")); // 1/2/3/4/5

// reverse: 배열을 뒤집음
const arrayReverse = [1, 2, 3];
arrayReverse.reverse();
console.log(arrayReverse); // [3, 2, 1]

// sort: 배열을 정렬

const arraySort = [5, 3, 1];
arraySort.sort();
console.log(arraySort); // [1, 3, 5]

// slice: 배열의 일부를 새 배열로 반환
const arraySlice = [1, 2, 3];
arraySlice.slice(0, 1); // [1]

// splice: 기존 배열의 요소를 제거하고, 제거한 요소를 새 배열로 반환
const arraySplice = [1, 2, 3, 4];
const test = arraySplice.splice(1, 2); // [2, 3]
console.log(arraySplice); // [1, 4]
