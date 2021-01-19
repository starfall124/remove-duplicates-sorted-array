const removeDuplicates = (nums) => {
  let length = nums.length;
  if (length === 0) return 0;
  let value = null;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] !== value) {
      nums[count] = nums[i];
      value = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("Given nums = [" + nums + "]\n");
console.log("-----------------Result--------------------");
console.log("Length = " + removeDuplicates(nums));
console.log("Modified nums = [" + nums + "]");
console.log("-------------------------------------------");
