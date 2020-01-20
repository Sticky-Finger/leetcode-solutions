/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * 1.暴力法
 * result: 未通过时间限制
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const res = [];
  // for (let i = 0; i < (s.length - p.length); i++) {
  for (let i = 0; i <= (s.length - p.length); i++) {
    // isAnagram(s[i, i + p.length - 1], p) ? res.push(i) : null;
    isAnagram(s.slice(i, i + p.length), p) ? res.push(i) : null;
  }
  return res;
};
function isAnagram(s, t) {
  const dic = {};
  for (let i = 0; i < s.length; i++) {
    dic[s[i]] ? dic[s[i]]++ : (dic[s[i]] = 1);
    dic[t[i]] ? dic[t[i]]-- : (dic[t[i]] = -1);
  }
  for (const key in dic) {
    if (dic[key] !== 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end

// @lc code=start
/**
 * 2.双指针法
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // if (p === '') {}
  let res = [];
  // 字符数量统计
  let need = {};
  let win = {};
  let match = 0;

  for (const c of p) {
    need[c] ? need[c]++ : (need[c] = 1);
  }
  const needKeysCount = Object.keys(need).length;

  for (let left = 0, right = 0; right < s.length; right ++) {
    const c0 = s[right];
    // if (c0 in need) {
    if (need[c1]) {
      win[c0] ? win[c0]++ : (win[c0] = 1);
      if (win[c0] === need[c0]) {
        match++;
      }
    }
    
    while ((left <= right) && (match === needKeysCount)) {
      if (right - left + 1 === p.length) {
        res.push(left);
      }

      const c1 = s[left];
      // if (c1 in need) {
      if (need[c1]) {
        win[c1]--;
        match--;
      }

      left++;
    }
  }
};
// @lc code=end

