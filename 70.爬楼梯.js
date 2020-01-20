/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * 1.分治递归
 * 时间复杂度2**n
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  return climbStairs(n -1) + climbStairs(n - 2);
};
// @lc code=end

// @lc code=start
/**
 * 2.分治递归 + 记忆化
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  climbStairs.dic[n] = climbStairs.dic[n] ? climbStairs.dic[n] : climbStairs(n -1) + climbStairs(n - 2);
  return climbStairs.dic[n];
};
climbStairs.dic = {};
// @lc code=end

// @lc code=start
/**
 * 3.递推
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, dic = {}) {
  if (n < 3) {
    return n;
  }
  let f1 = 1, f2 = 2;
  let fn = 0;
  for (let i = 3; i < n + 1; i++) {
    fn = f1 + f2;
    [f1, f2] = [f2, fn];
  }
  return fn;
};

// @lc code=start
/**
 * 4.通项公式法？
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, dic = {}) {
};
// @lc code=end
// @lc code=end

