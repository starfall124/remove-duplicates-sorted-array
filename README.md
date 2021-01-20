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
# Steps to solve this problem

1. Return `0` if the given array is empty.
2. Declare two variables, `value` and `count`, and set them `null` and `0`, respectively.
3. Use a for loop with index `i` to check if the number with index `i` is equal to the `value`.
4. If not, copy the value of the number with index `i` to the element at the index `count` and copy the value of the number with index `i` to the `value` and then increment `count` by 1.

5. After the loop finishes, return the length of the unique numbers, which equals to `count`

# Complexity:
- Time complexity of the above algorithm is O(n) because we are iterating over the input array only once and n is the total number of elements in that array. 
- Constant space is O(1), because we are not using any extra space.
