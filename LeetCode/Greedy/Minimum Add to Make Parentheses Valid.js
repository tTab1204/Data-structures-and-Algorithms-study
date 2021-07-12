var minAddToMakeValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === "(" && s[i] === ")") stack.pop();
    else stack.push(s[i]);
  }
  return stack.length;
};

// 다른 사람의 풀이
var minAddToMakeValid = function (S) {
  let open = 0,
    close = 0;

  for (let c of S) {
    if (c === "(") open++;
    else if (!open) close++;
    else open--;
  }
  return open + close;
};

// 안되는 케이스가 앞부분이 맨 앞 요소가 ')'일 때 였는데, 좀 더 생각했으면 더 빨리 해결할 수 있었을듯
