// find closest value in BST

//recursive
// O(log(n)) time, O(log(n)) space
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(tree.value - target) < Math.abs(target - closest))
    closest = tree.value;
  if (tree.value > target) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (tree.value < target) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

//iterative
// O(log(n)) time, O(1) space
// function findClosestValueInBst(tree, target) {
//   return findClosestValueInBstHelper(tree, target, Infinity);
// }

// function findClosestValueInBstHelper(tree, target, closest) {
//   let currNode = tree;
//   while (currNode !== null) {
//     if (Math.abs(currNode.value - target) < Math.abs(target - closest))
//       closest = currNode.value;
//     if (currNode.value > target) {
//       currNode = currNode.left;
//     } else if (currNode.value < target) {
//       currNode = currNode.right;
//     } else {
//       break;
//     }
//   }
//   return closest;
// }
