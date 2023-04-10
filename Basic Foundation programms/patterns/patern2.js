// let pattern = ""
// const n = 4;
// for (let row = 1; row <= n; row++) {
// for (let col = 0; col < n; col++) {
//     pattern += `${n - col} `;
// }
// pattern += "\n"
// }
// console.log(pattern)

let pattern = "";
let row = 1;
let n = 4;

while (row <= n) {
  let col = 1;
  while (col <= n) {
    pattern += `${n - col + 1} `;
    col++;
  }

  row++;
  pattern += "\n"
}
console.log(pattern);
