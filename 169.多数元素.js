/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 暴力法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let res = undefined, count = 0;
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums.filter(item => item === nums[i]).length;
    if (tmp > count) {
      res = nums[i];
      count = tmp;
    }
  }
  return res;
};
// @lc code=end

// @lc code=start
/**
 * 使用字典
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dic = {};
  nums.forEach(num => {
    dic[num] = dic[num] ? ++dic[num] : 1;
  });
  let key = undefined;
  Object.keys(dic).forEach(item  => {
    if (key === undefined) {
      key = item;
    } else {
      key = dic[item] > dic[key] ? item : key;
    }
  });
  return parseInt(key);
};
// @lc code=end

// @lc code=start
/**
 * 使用字典
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dic = {};
  nums.forEach(num => {
    dic[num] = dic[num] ? ++dic[num] : 1;
  });
  // let key = undefined;
  // Object.keys(dic).forEach(item  => {
  //   if (key === undefined) {
  //     key = item;
  //   } else {
  //     key = dic[item] > dic[key] ? item : key;
  //   }
  // });
  // return parseInt(key);

  return Object.keys(dic).find(item => dic[item] >= nums.length/2);
};
// @lc code=end

// @lc code=start
/**
 * 使用Map
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dic = new Map();
  nums.forEach(num => {
    dic.has(num) ? dic.set(num, dic.get(num) + 1) : dic.set(num, 1);
  });
  for (let item of dic) {
    if (item[1] > nums/2) {
      return item[0]
    }
  }
};
// @lc code=end

/**
 * 使用排序，（排序后n/2处的数为结果）
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  return nums.sort()[Math.floor(nums.length/2)];
};

// @lc code=end

/**
 * Boyer Moore
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = undefined;
  count = 0;
  nums.forEach(num => {
    if (!candidate || !count) {
      candidate = num;
      count = 1;
    } else {
      count += num === candidate ? 1 : -1;
    }
  });
  return candidate;
};

// @lc code=end

/**
 * Boyer Moore
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate = undefined;
  count = 0;
  nums.forEach(num => {
    if (!count) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  });
  return candidate;
};

// @lc code=end

/**
 * 分治法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const len = nums.length;
  const leftNums = nums.slice(0, Math.ceil(len/2));
  const rightNums = nums.slice(Math.ceil(len/2));
  const left = majorityElement(leftNums);
  const right = majorityElement(rightNums);
  if (left === right) {
    return left;
  } else {
    return numCount(leftNums, left) > numCount(rightNums, right) ? left : right;
  }
};
function numCount(nums, num) {
  return nums.filter(item => item === num).length;
}

// @lc code=end

/**
 * 分治法(左右游标)
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
};
// @lc code=end
