// find sums of all branches in BT (sums of all paths in BT)

// node = (value, left, right)

// O(n) time and O(n) space
function branchSums(root) {
  const sums = [];
  branchSumsHelper(root, 0, sums);
  return sums;
}

function branchSumsHelper(node, runningSum, sums) {
  if (!node) return;
  let newSum = runningSum + node.value;
  if (isLeaf(node)) {
    sums.push(newSum);
    return;
  }
  branchSumsHelper(node.left, newSum, sums);
  branchSumsHelper(node.right, newSum, sums);
}

function isLeaf(node) {
  return node.left === null && node.right === null ? true : false;
}
