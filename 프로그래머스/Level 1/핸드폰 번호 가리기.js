const solution = (phoneNumber) => {
  let answer = '';

  for (let i = 0; i < phoneNumber.length; i++) {
    if (i < phoneNumber.length - 4) {
      answer += '*';
    } else {
      answer += phoneNumber[i];
    }
  }
  return answer;
};

// split - map - join 방법도 있던데.. 내일 더 알아보자.
