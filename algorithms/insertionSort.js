/**
 * Insertion Sort Algorithm.
 * This algorithm builds the sorted array one element at a time by repeatedly taking an element
 * from the unsorted portion of the array and inserting it into its correct position in the sorted portion.
 *
 * The sorted portion of the array grows with each iteration, while the unsorted portion shrinks.
 * This makes it efficient for small or nearly sorted arrays but less efficient for large, random arrays.
 *
 * Time complexity: O(n^2) in the worst and average case, O(n) in the best case (when the array is already sorted).
 *
 * @param {Array} array - The array of numbers to be sorted.
 * @returns {Array} - The sorted array.
 */
const insertionSort = (array) => {
  // Iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    let current = array[i]; // Current element to be inserted
    let j = i - 1;

    // Shift elements of the sorted portion that are greater than the current element
    // to one position ahead of their current position
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the current element into its correct position in the sorted portion
    array[j + 1] = current;
  }

  return array;
};

export default insertionSort;

// Example usage
console.log(insertionSort([6, 6, 7, 8, 9, 1, 3, 5, 6, 7]));
