let rows = parseInt(prompt("Enter the number of rows for the diamond: "));
let diamond = "";
for (let i = 0; i < rows; i++) {
  diamond += " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + "\n";
    }
for (let i = rows - 2; i >= 0; i--) {
  diamond += " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + "\n";
    }
console.log(diamond);
