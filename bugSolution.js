function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return 0 or another default value as desired 
  }
  return a + b; //added explicit handling for null values
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5));   // Output: 10