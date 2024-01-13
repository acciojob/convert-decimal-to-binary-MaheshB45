function decimalToBinary(num) {
  // Check if the input is 0
  if (num === 0) {
    return '0';
  }

  // Initialize an empty string to store the binary representation
  let binary = '';

  // Convert decimal to binary
  while (num > 0) {
    // Get the remainder when dividing by 2 (this will be the binary digit)
    const remainder = num % 2;

    // Prepend the remainder to the binary string
    binary = remainder + binary;

    // Update the number by dividing it by 2 (integer division)
    num = Math.floor(num / 2);
  }

  return binary;
}

// Example usage
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));