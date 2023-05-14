// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// function secondLargest(arr) {
//   const uniqueArr = Array.from(new Set(arr));
//   uniqueArr.sort((a, b) => b - a);

//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// }
// console.log(secondLargest([12, 35, 1, 10, 34, 1]));

function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1]));
