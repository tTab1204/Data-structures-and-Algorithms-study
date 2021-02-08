// sort는 unicode 비교를 통해 정렬,

// 다른 문자 간의 비교는 sort((a,b) => a.localeCompare(b))를 통해 가능

// 1. 버블정렬
// 너무 느리다.
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        //Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// 시간복잡도 높음 (=안 좋음)

bubbleSort(numbers);
console.log(numbers);

// 2. 선택정렬
// 너무 느리다2.
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);

// 시간복잡도 높음 (=안 좋음)

// 3. 삽입정렬
// input이 적을 때, 요소들이 대부분 정렬되어 있을 때 매우 빠르다.
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
      //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        // find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            // move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

// 바로 이해가 안된다. 좀 더 보자.

insertionSort(numbers);
console.log(numbers);

// 4. 합병 정렬 (O(n log(n)))
// 분할 및 정복, 매우 빠르다.
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

// 바로 이해가 안된다2. 좀 더 보자.

// 5. 퀵 정렬
// 매우 빠르다. 공간 복잡도 매우 낮다.
// worst case: 매우 느려질 위험이 있다.
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// 바로 이해가 안된다3. 좀 더 보자.
