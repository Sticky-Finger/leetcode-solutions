/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (!n) {
    return 1;
  }
  if (n < 0) {
    x = 1/x;
    n = -n;
  }
  let res = 1;
  while (n) {
    if (n & 1) {
      res *= x;
      n -= 1;
    }
    x *= x;
    n /= 2;
  }
  return res;
};
// @lc code=end

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (!n) {
    return 1;
  }
  if (n < 0) {
    x = 1/x;
    n = -n;
  }

  if (myPow.dic[n]) {
    return myPow.dic[n];
  }
  const n1 = Math.ceil(n / 2);
  const n2 = n - n1;
  myPow.dic[n] = myPow(x, n1) * myPow(x, n2);
  return myPow.dic[n];
};
myPow.dic = {};
// @lc code=end

