// 혼자 못 풀었다.
// 아직 DFS를 제대로 이해 못해서 그렇다. 제대로 이해해보자.
// 재귀를 이해해야함

// 재귀를 이용한 방식
var rangeSumBST = function (root, L, R) {
  // check if value is in the given range
  const isInBetween = (val) => val >= L && val <= R;

  // sum the value if it's in the range
  const add = (val, sum) => (isInBetween(val) ? (sum += val) : sum);

  // traverse through the nodes and sum the values in range
  const preorder = (root, sum) => {
    if (!root) return sum;
    return (
      add(root.val, sum) + preorder(root.left, sum) + preorder(root.right, sum)
    );
  };
  return preorder(root, 0);
};
// 어떻게 이해가 되기는 했는데
// 아니 이건 이해 안 된건가

// 다른 사람의 풀이
var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  // L보다 root.val이 클 경우에 -> root.left로 순회하면서 값을 더해준다.
  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  // R또는 L과 값이 같아지거나 그 사이에 있을때는 계속 root.val을 더해준다.
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  // R보다는 root.val이 작을 경우에 -> root.right으로 순회하면서 값을 더해준다.
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  // 배열의 끝 - 그러니까 제일 아래로 내려갔다면 더 이상 아래로 내려갈게 없기 때문에
  // 따로 뭐 해줄필요 없이 sum을 return한다.

  return sum;
};

// 겨우겨우 이해된 것 같다.
// 재귀에 대한 이해가 더 필요
