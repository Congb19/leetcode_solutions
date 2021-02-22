/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  // let self = {
  //     name: "self",
  //     length: 0,
  //     "1": 2
  // }
  self = [...Array()];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  for (let i = 0; i < self.length; i++) {
    if (self[i] === val) return false;
  }
  self.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  for (let i = 0; i < self.length; i++) {
    if (self[i] === val) {
      self.splice(i, 1);
      return true;
    }
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let p = Math.floor(Math.random() * self.length) % self.length;
  // console.log(p);
  return self[p];
};

// Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();
var param_1 = obj.insert(2);
var param_1 = obj.insert(3);
var param_1 = obj.insert(4);
var param_2 = obj.remove(2);
var param_3 = obj.getRandom();
console.log(param_3);
