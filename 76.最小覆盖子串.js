/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * 1.双指针法 ？
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t === '') {
    return '';
  }
  let res = '';
  let left = right = 0;
  let need = {};
  let win = {};
  for (const c of t) {
    need[c] ? need[c]++ : (need[c] = 1);
  }
  let match = 0;

  let is_matched = false; // match === Object.keys(need).length是否成功过

  while (right < s.length) {
    const c0 = s[right];
    if (need[c0]) {
      win[c0] ? win[c0]++ : (win[c0] = 1);
      if (need[c0] === win[c0]) {
        match++;
      }
    }
    right++;

    while (match === Object.keys(need).length) {
      // 取最短字串
      // res = res.length > s.slice(left, right + 1).length ? s.slice(left, right - 1 + 1) : res;
      if (is_matched) {
        res = res.length > s.slice(left, right + 1).length ? s.slice(left, right - 1 + 1) : res;
      } else {
        res = s.slice(left, right - 1 + 1);
      }

      is_matched = true;

      left++;
      const c1 = s[left + 1];
      if (need[c1]) {
        win[c1]--;
        if (need[c1] !== win[c1]) {
          match--;
        }
      }
    }
  }
  return res;
};
// @lc code=end

