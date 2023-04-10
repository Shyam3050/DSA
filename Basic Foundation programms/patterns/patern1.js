let pattern = "";

for (let row = 1; row <= 4; row++) {
  for (let col = 1; col <= 4; col++) {
    pattern += `${col} `;
  }
  pattern += "\n";
}
console.log(pattern);