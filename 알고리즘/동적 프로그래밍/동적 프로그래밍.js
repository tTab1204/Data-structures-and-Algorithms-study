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
