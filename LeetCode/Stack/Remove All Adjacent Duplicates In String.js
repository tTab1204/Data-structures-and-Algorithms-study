var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i]);
  }
  return stack.join("");
};
// [a]
// [a, b]
// [a, b]

s = "abbaca";
removeDuplicates(s);
