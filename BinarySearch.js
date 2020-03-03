function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;
  let middle = Math.floor(array.length / 2);
  while (left !== right) {
    if (array[middle] === target) return middle;
    else if (array[middle] > target) {
      right = middle - 1;
      middle = Math.floor(array.slice(0, middle).length / 2);
    } else {
      left = middle + 1;
      middle = Math.floor(array.slice(left).length / 2);
      if (array[left] === target) return left;
    }
  }
  return -1;
}

// binarySearch([1, 5, 23, 111], 111);
