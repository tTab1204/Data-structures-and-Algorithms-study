var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (stack1.length === 0) continue;
      else stack1.pop();
    } else stack1.push(s[i]);
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      if (stack2.length === 0) continue;
      else stack2.pop();
    } else stack2.push(t[i]);
  }

  stack1 = stack1.join("");
  stack2 = stack2.join("");
  return stack1 === stack2 ? true : false;
};

let s = "#a#c",
  t = "#a#c";
backspaceCompare(s, t);

// 다른 사람의 풀이1 (스택)
// 훨씬 간단함.
const process = (s) => {
  const res = [];
  for (x of s.split("")) {
    x === "#" ? res.pop() : res.push(x);
  }
  return res.join("");
};
var backspaceCompare = (S, T) => process(S) == process(T);

// Two pointers - O(n) time, O(1) space
const backspaceCompare = (S, T) => {
  return edit(S) === edit(T);

  function edit(str) {
    let result = "";
    let backspaces = 0;

    // 거꾸로 반복 진행
    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (str[i] === "#") {
        backspaces++;
      } else if (backspaces > 0) {
        backspaces--;
      }
      // 위에 두개의 조건으로 인해 #과 그 이전의 요소를
      // 점프하는거다!
      else {
        result = str[i] + result;
      }
      console.log("backspaces: ", backspaces);
      console.log("result: ", result);
    }
  }
};

(s = "ab#c"), (t = "ad#c");
edit(s);

edit(t);
