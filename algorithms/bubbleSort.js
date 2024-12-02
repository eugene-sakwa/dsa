import swap from "./swap.js";

/**
 * Bubble Sort Algorithm.
 * This sorting algorithm repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. The process is repeated until the array is sorted.
 * Each pass through the list moves the largest unsorted element to its correct position.
 * 
 * The algorithm continues until no swaps are needed, which indicates that the list is sorted.
 * This optimization helps reduce unnecessary passes through the list if it's already sorted.
 *
 * Time complexity: O(n^2) in the worst and average case, O(n) in the best case (when the list is already sorted).
 * Space complexity: O(1), since it's an in-place sorting algorithm.
 * 
 * @param {Array} array - The array of numbers to be sorted.
 * @returns {Array} - The sorted array.
 */
const bubbleSort = array => {
  let n = array.length;

  for (let i = n - 1; i > 0; i--) {
    let swapped = false;

    // Inner loop compares adjacent elements from the start up to the unsorted part of the array
    // After each outer loop pass, the largest element is correctly placed at the end, so the inner loop length reduces
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swapped = true; 
        swap(array, j, j + 1); 
      }
    }

    // If no swaps were made in this pass, the array is already sorted, so we can break early
    if (!swapped) break;
  }

  return array;
};

export default bubbleSort;


console.log( bubbleSort([6,6,7,8,9,1,3,5,6,7]))
