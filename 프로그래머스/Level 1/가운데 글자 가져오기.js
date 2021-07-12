const solution = (s) => {
  if (s.length % 2 === 0) {
    let answer = s.substr(s.length / 2 - 1, 2);
    return answer;
  }

  if (s.length % 2 === 1) {
    let answer = s.substr(s.length / 2, 1);
    return answer;
  }
};

// substr(): 문자열을 가져오는 메소드
// strings.substr(시작점, 길이)
