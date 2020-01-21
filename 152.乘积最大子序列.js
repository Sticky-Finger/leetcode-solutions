/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let Max = Number.NEGATIVE_INFINITY;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const cur = nums.slice(i, j + 1).reduce((acc, cur) => acc * cur);
      (cur > Max) && (Max = cur);
    }
  }
  return Max;
};
// @lc code=end

