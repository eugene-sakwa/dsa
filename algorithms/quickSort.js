/*
  QuickSort Algorithm:

  - QuickSort is a divide-and-conquer algorithm that recursively sorts an array.
  - The key idea is to partition the array around a pivot value, such that:
      - Elements smaller than the pivot are moved to the left.
      - Elements larger than the pivot are moved to the right.
  - The pivot ends up in its correct sorted position after partitioning.

  Implementation Details:
  1. `quickSort(array, left, right)`:
      - Recursively calls itself for subarrays to the left and right of the pivot's final position.
  2. `partitionHelper(array, start, end)`:
      - Selects the pivot value, partitions the array, and returns the pivot's final index.
      - Uses `swap` to move elements.
  3. `swap`:
      - This function is imported from a separate file to promote reusability and modularity.

  Time Complexity:
  - Best/Average Case: O(n log n), when the pivot divides the array into balanced partitions.
  - Worst Case: O(n²), when the pivot creates highly unbalanced partitions (e.g., already sorted arrays).

  Space Complexity:
  - In-place sorting: O(log n) auxiliary space for the recursive call stack.

  Notes:
  - To avoid the worst-case scenario, consider using a randomized pivot selection strategy.
  - This implementation assumes the array contains comparable elements.
*/

import { swap } from './swap.js';

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    // Find the partition index
    let partitionIdx = partitionHelper(array, left, right);

    // Recursively sort elements to the left of the partition
    quickSort(array, left, partitionIdx - 1);

    // Recursively sort elements to the right of the partition
    quickSort(array, partitionIdx + 1, right);
  }

  return array;
};

const partitionHelper = (array, start = 0, end = array.length - 1) => {
  let pivotValue = array[start]; // Value of the pivot
  let partitionIndex = start;   // Tracks where the pivotValue should go

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < pivotValue) {
      partitionIndex++;
      swap(array, partitionIndex, i);
    }
  }

  // Move the pivotValue to its correct position
  swap(array, start, partitionIndex);
  return partitionIndex;
};

export default quickSort;
