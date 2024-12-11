/*
Merge Sort Algorithm

Merge Sort is a divide-and-conquer sorting algorithm with the following steps:
1. Divide the array into two halves until each subarray contains one or no elements.
2. Recursively sort both halves.
3. Merge the two sorted halves into a single sorted array.

Time Complexity: O(n log n)
- Best case: O(n log n)
- Worst case: O(n log n)

Space Complexity: O(n)
- Additional space is used for splitting arrays and storing merged results.

This implementation uses recursion for splitting and merging arrays.
*/

const mergeSort = (array) => {
  // Base case: An array with 1 or no elements is already sorted
  if (array.length <= 1) return array;

  // Find the middle index to split the array into two halves
  let middle = Math.floor(array.length / 2);

  // Recursively sort the left and right halves
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  // Merge the sorted halves
  return merge(left, right);
};

const merge = (left, right) => {
  let sortedArray = []; // Array to store the merged and sorted result
  let i = 0; // Pointer for the left array
  let j = 0; // Pointer for the right array

  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left array
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // Add any remaining elements from the right array
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
};

// Example Usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
