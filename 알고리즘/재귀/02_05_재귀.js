let counter = 0;
// 재귀함수에는 중지조건이 필요하다.
function inception() {
  if (counter > 3) {
    return "done!";
  }
  counter++;
  return inception();
}
inception();

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer return when needed. Usually you have 2 returns

//------------------- factorial ------------------//

function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

findFactorialIterative(5);
findFactorialRecursive(5);

//------------------- fibonacciRecursive ------------------//

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  //code here;
}

fibonacciRecursive(3);
