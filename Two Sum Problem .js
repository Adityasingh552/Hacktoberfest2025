/**
 * Finds two indices in an array that add up to a target value.
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} An array containing the two indices, or an empty array if no solution is found.
 */
function twoSum(nums, target) {
  // 1. Create a Map to store numbers we have already seen.
  // The map will store: {number_value => index}
  const numMap = new Map();

  // 2. Iterate through the array once.
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    
    // 3. Calculate the 'complement' we need to find.
    // (complement + currentNum = target)
    const complement = target - currentNum;

    // 4. Check if the complement already exists in our map.
    if (numMap.has(complement)) {
      // 5. If it exists, we found our pair!
      // Return the complement's index (from the map) and the current index (i).
      return [numMap.get(complement), i];
    }

    // 6. If the complement is not found, add the *current* number
    // and its index to the map for future iterations.
    numMap.set(currentNum, i);
  }

  // 7. If the loop finishes without finding a pair, return an empty array.
  return [];
}
