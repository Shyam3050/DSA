// function rotateArray(num, k) {
//   let size = num.length;

//   if (k > size) {
//     k = k % size;
//   }

//   const rotated = num.splice(size - k, size);
//   console.log(rotated);
//   num.unshift(...rotated);
//   return num;
// }

function rotateArray(num, k) {
  console.log(num);
  let arrayLength = num.length;
  console.log(arrayLength);

  if (k > arrayLength) {
    k = k % arrayLength;
  }
  reverce(num, 0, arrayLength - 1);
  reverce(num, 0, k - 1);
  reverce(num, k, arrayLength - 1);
  return num;
}
function reverce(num, left, right) {
  while (left < right) {
    let temp = num[left];
    num[left] = num[right];
    num[right] = temp;
    left++;
    right--;
  }
}
console.log(rotateArray([1, 2, 3, 4], 2));
