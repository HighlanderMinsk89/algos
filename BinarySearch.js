// Return index of target num if found in the sorted array, if not return -1.

// O(log(n)) time, O(1) space
function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1,
    middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    else if (array[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// binarySearch([1, 5, 23, 111], 111);
