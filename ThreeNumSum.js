// find all the triplets of nums which sum up to target num

// O(n^2) time and O(n) space
function threeNumberSum(array, targetSum) {
  //O(n*log(n)) time
  array.sort((a, b) => a - b);

  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let curSum = array[i] + array[left] + array[right];
      if (curSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (curSum < targetSum) {
        left--;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
// return [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
