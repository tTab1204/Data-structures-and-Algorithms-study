function solution(numbers, hand) {
  let answer = '';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) numbers[i] = 'R';

    if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) numbers[i] = 'L';
  }

  // 거리 변수를 만들어야 하나?
  let distance = 0;
  // 사실상 [1.4.7] 이랑 [3,6,9] 길이를 구할 때는 같은 위치라고 생각하면 된다.
  // 거리가 1일때(바로 옆에 있는 숫자들일 때) - 제일 가까움
  // 거리가 (1 < distance < 5) 일 때 - 두번째로 가까움
  // 나머지 - 거리가 가장 멈

  // 근데 0일때는?

  // 만약 numbers[i]가 [2,5,8,0] 중에 하나이고 그 전에 숫자가
  if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0)
    // 거리가 같다면 hand로 판단

    //   right = [1, 4, 7];
    //   left = [3, 6, 9];
    // [2,5,8,0] ??

    return answer;
}
