// Sort array with bubble sort algorithm

// O(n^2) time and O(1) space
function bubbleSort(array) {
  // Write your code here.
  let isSorted = false;
  //to slightly improve since at each iteration the largest num is moved to the end
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
