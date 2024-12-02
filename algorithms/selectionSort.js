import swap from "./swap.js";

/**
 * Selection Sort Algorithm.
 * This algorithm divides the array into two parts: a sorted portion and an unsorted portion.
 * It repeatedly selects the smallest (or largest) element from the unsorted portion
 * and swaps it with the first unsorted element, effectively growing the sorted portion by one element.
 *
 * The process continues until the entire array is sorted.
 *
 * Key characteristics:
 * - The algorithm always performs O(n^2) comparisons, regardless of the initial order of elements.
 * - It is an in-place sorting algorithm, so it requires O(1) additional space.
 * - Selection Sort is not stable, meaning it may change the relative order of elements with equal keys.
 *
 * Time Complexity:
 * - Best Case: O(n^2)
 * - Average Case: O(n^2)
 * - Worst Case: O(n^2)
 *
 * Space Complexity:
 * - O(1), since no extra memory is allocated for sorting.
 *
 * @param {Array} array - The array of numbers to be sorted.
 * @returns {Array} - The sorted array.
 */
const selectionSort = (array) => {
  let smallest;

  for (let i = 0; i < array.length; i++) {
    smallest = i;

    // Inner loop to find the smallest element in the remaining unsorted portion
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j; // Update smallest index if a smaller element is found
      }
    }

    if (i !== smallest) {
      swap(array, smallest, i);
    }
  }

  return array;
};

export default selectionSort;

console.log(selectionSort([5, 6, 7, 9, 1, 4, 6]));
