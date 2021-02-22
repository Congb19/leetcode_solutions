/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  self = nums;
  ori = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  self = [...ori];
  // console.log(self);
  return self;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < self.length; i++) {
    let p = Math.floor(Math.random() * 100) % self.length;
    let tmp = self[i];
    self[i] = self[p];
    self[p] = tmp;
  }
  // console.log(self);
  return self;
};

let nums = [1, 2, 3];
// Your Solution object will be instantiated and called as such:
var obj = new Solution(nums);
var param_2 = obj.shuffle();
var param_1 = obj.reset();
var param_2 = obj.shuffle();
var param_1 = obj.reset();

// let grid=[[2,1,1],[0,1,1],[1,0,1]];
// console.log(orangesRotting(grid));
