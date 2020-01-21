/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * 暴力法
 * @param {number[][]} triangle
 * @return {number}
 */
var minPath = function(triangle, m = 0, n = 0) {
  if (m === triangle.length - 1) {
    return triangle[m][n]
  } 
  return triangle[m][n] + Math.min(minPath(triangle, m + 1, n), minPath(triangle, m + 1, n + 1))
}
// @lc code=end

// @lc code=start
/**
 * 带记忆的递归
 */
var minimumTotal = function(triangle) {
  const store = {}
  const len = triangle.length

  function minPath(t, m = 0, n = 0) {
    if (m === len - 1) {
      return t[m][n]
    }
    const key = `${m},${n}`
    if (store[key] === undefined) {
      store[key] = t[m][n] + Math.min(minPath(t, m + 1, n), minPath(t, m + 1, n + 1))
    }
    return store[key]
  }

  return minPath(triangle)
};
// @lc code=end

// @lc code=start
/**
 * 动态规划
 */
var minimumTotal = function(triangle) {
  let minTotal;
  let minTotalList = [];
  const len = triangle.length
  for (let i = len - 1; i > 0; i--) {
    // if (i === 0) {
    //   return triangle[0][0] + (minTotalList[0] || 0)
    // }
    let minTotalListTmp = []
    for (let j = 0; j < i; j++) {
      // minTotalListTmp.push((minTotalList[j] || 0) + Math.min(triangle[i][j], triangle[i][j + 1]))
      const tempMin = Math.min(triangle[i][j] + (minTotalList[j] || 0), triangle[i][j + 1] + (minTotalList[j + 1] || 0));
      minTotalListTmp.push(tempMin)
    }
    minTotalList = minTotalListTmp
  }
  return triangle[0][0] + (minTotalList[0] || 0)
}
// @lc code=end