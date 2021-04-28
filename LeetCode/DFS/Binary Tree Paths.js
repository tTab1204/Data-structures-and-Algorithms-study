var binaryTreePaths = function (root) {
  // speical case
  if (!root) return [];

  var result = [];

  function path(root, str) {
    if (!root.left && !root.right) result.push(str + root.val);

    if (root.left) path(root.left, str + root.val + "->");

    if (root.right) path(root.right, str + root.val + "->");
  }
  path(root, "");
  return result;
};

// 아직 이해 덜 됨
// 재귀의 동작 방식 이해하고 다시 풀기
