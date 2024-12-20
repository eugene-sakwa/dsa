/*
Radix Sort Algorithm

Radix Sort is a non-comparative sorting algorithm that works by sorting numbers digit by digit, starting from the least significant digit (LSD) to the most significant digit (MSD).

Steps:
1. Find the maximum number in the array to determine the number of digits.
2. Perform counting sort for each digit, starting from the least significant digit.
3. Use a stable sorting technique to ensure the relative order of elements remains consistent.

Time Complexity: O(nk)
- n: Number of elements in the array
- k: Number of digits in the largest number

Space Complexity: O(n + k)
- Additional space is used for auxiliary arrays during counting sort.

Radix Sort is efficient for sorting integers and works best when the range of digits (k) is not too large.
*/

const radixSort = (array) => {
  // Find the maximum number to determine the number of digits
  const maxNum = Math.max(...array);

  // Perform counting sort for each digit
  let place = 1; // Starting with the least significant digit (1s place)
  while (Math.floor(maxNum / place) > 0) {
    array = countingSortByDigit(array, place);
    place *= 10; // Move to the next significant digit
  }

  return array;
};

const countingSortByDigit = (array, place) => {
  const count = Array(10).fill(0); // There are 10 possible digits (0–9)
  const output = Array(array.length).fill(0);

  // Count occurrences of each digit at the given place
  for (let num of array) {
    const digit = Math.floor((num / place) % 10);
    count[digit]++;
  }

  // Convert counts to cumulative counts for stable sorting
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the sorted output array
  for (let i = array.length - 1; i >= 0; i--) {
    const digit = Math.floor((array[i] / place) % 10);
    output[count[digit] - 1] = array[i];
    count[digit]--;
  }

  return output;
};

// Example Usage
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
