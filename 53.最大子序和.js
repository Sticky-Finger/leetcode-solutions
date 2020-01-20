/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * 1.分治 + 递归
 * 切分为[left, mid], [mid + 1, right]两段数组，问题化为：Max(left最大和，right最大和，包含mid最大和)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return maxSum(nums, 0, nums.length - 1);
};
function maxSum(nums, left, right) {
  if (left === right) {
    return nums[left];
  }
  const mid = (left + right)>>1; // `-1>>1 = 1` 除取整有问题
  // const mid = Math.floor((left + right)/2);
  const leftSum = maxSum(nums, left, mid);
  const crossSum = crossMaxSum(nums, left, mid, right);
  const rightSum = maxSum(nums, mid + 1, right);
  return Math.max(leftSum, crossSum, rightSum);
}
function crossMaxSum(nums, left, mid, right) {
  if (left === right) {
    return nums[left];
  }
  let leftCount = 0;
  let leftMax = -Infinity;
  for (let i = mid; i >= left; i--) {
    leftCount += nums[i];
    leftMax = Math.max(leftCount, leftMax);
  }

  let rightCount = 0;
  let rightMax = 0;
  // let rightMax = -Infinity;
  for (let j = mid + 1; j <= right; j++) {
    rightCount += nums[j];
    rightMax = Math.max(rightCount, rightMax);
  }

  return leftMax + rightMax;
}

// @lc code=end

// @lc code=start
/**
 * 2.贪心 ？？
 * 分解为子问题：从下标0处遍历数组
 * a.当前元素
 * b.当前元素的最大和（至少累加当前元素）
 * c.迄今为止的最大和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cur_sub = max_sub = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   cur_sub = Math.max(nums[i], cur_sub + nums[i]);
  //   max_sub = Math.max(cur_sub, max_sub);
  // }
  for (const num of nums) {
    cur_sub = Math.max(num, cur_sub + num); // 最大连续子序和（包含num的子序列）
    max_sub = Math.max(cur_sub, max_sub);
  }
  return max_sub;
};
// @lc code=end

// @lc code=start
/**
 * 3.动态规划 ？？
 * 分解为子问题：Max()
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
};
// @lc code=end


