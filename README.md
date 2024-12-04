# JavaScript Bug: Handling Null Values in Function Arguments

This repository demonstrates a common error in JavaScript when dealing with null values as function arguments. The original `foo` function does not explicitly handle null values, resulting in unexpected behavior.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version of the function that explicitly handles null values.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment. Observe that the function returns unexpected results when null is passed as argument.
3. Open `bugSolution.js` and run the corrected code to see how null values should be handled.