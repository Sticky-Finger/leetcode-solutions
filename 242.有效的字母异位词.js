/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 1.排序法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
// @lc code=end

// @lc code=start
/**
 * 2.哈希表
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  
  for (const i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    map.has(t[i]) ? map.set(t[i], map.get(t[i]) - 1) : map.set(t[i], -1);
  }

  for (const c of map) {
    if (c[1] !== 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end

// @lc code=start
/**
 * 3.哈希表(使用数组下标【字母的ASCII码】作为key，字母是有限个的所以数组分配的空间不会无限长)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const arr = [];
  
  for (const i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i)] ? arr[s.charCodeAt(i)]++ : (arr[s.charCodeAt(i)] = 1);
    arr[t.charCodeAt(i)] ? arr[t.charCodeAt(i)]-- : (arr[t.charCodeAt(i)] = -1);
  }

  for (const value of arr) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end
