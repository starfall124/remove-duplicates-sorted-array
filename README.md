# remove-duplicates-sorted-array

Run this script

```bash
$ node index.js
```
All inputs are hard-coded in the following way:

```javascript
/* index.js */

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Given nums = [" + nums + "]\n");
console.log("-----------------Result--------------------");
console.log("Length = " + removeDuplicates(nums));
console.log("Modified nums = [" + nums + "]");
console.log("-------------------------------------------");

```
Steps to solve this problem

```text

1. Return 0 if the given array is empty.
2. Declare two variables, `value` and count, and set them null and 0, respectively.
3. Use a for loop with index i to check if the number with index i is equal to the value.
4. if not, copy the value of the number with index i to the element at the index count and then increment count by 1.

```
