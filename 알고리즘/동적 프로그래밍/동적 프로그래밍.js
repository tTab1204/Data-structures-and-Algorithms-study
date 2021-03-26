function addTo80(n) {
  return n + 80;
}

// 캐시 객체 안에 있어서 시간이 더 걸린다.
let cache = {};
return function (n) {
  // 클로저
  function memoizedAddTo80(n) {
    // 속성이 객체에 존재하는지 확인하는 방법
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  }
};

const memoized = memoizedAddTo80();

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;

function fibonacci(n) {
  //O(2^n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  //O(n)
  // 시간 복잡성은 줄였지만 공간 복잡성이 늘어남.

  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log("Slow", fibonacci(35));
console.log("DP", fasterFib(100));
console.log("DP2", fibonacciMaster2(100));
console.log("we did " + calculations + " calculations");

// 3/26(금) - 다시 이해하기

// 동적프로그래밍이란, 하나의 문제를 단 한번만 풀도록 하는 알고리즘이다.
// 퀵 정렬, 병합 정렬, 이진검색 - 분할 기법에 속함. (평균적인 시간복잡도가 매우 빠른 편)
// 분할 기법의 단점 - 동일한 문제를 반복해서 푼다. (ex - 피보나치 수열)

// 피보나치 수열: 특정 숫자를 구하기 위해 그 앞에 있는 숫자와 두 칸 앞에 있는 숫자의 합을 구해야 함.
// D[i] = D[i-1] + D[i-2]

const memory = [0];

const fibonacci = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memory[n] !== null) return memory[n];

  return (memory[n] = fibonacci(n - 1) + fibonacci(n - 2));
};

// 내가 이해한 것: 저장할 공간을 만들어두고, 다시 탐색할 때 일일이 탐색할 필요 없이
// 저장 되어 있는 걸 갖고와서 쓰면 된다. - 이게 동적 프로그래밍.
