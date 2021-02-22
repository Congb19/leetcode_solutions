/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [...Array()];
  let dd = (n, tmp) => {
    if (n === nums.length) {
      // console.log("go", tmp);
      res.push([...tmp]);
      return;
    } else {
      for (let i = n; i < nums.length; i++) {
        //swap n i
        let t = nums[i];
        nums[i] = nums[n];
        nums[n] = t;
        //go
        tmp.push(nums[n]);
        // console.log(tmp, nums);
        dd(n + 1, tmp);
        tmp.pop();
        //back
        t = nums[i];
        nums[i] = nums[n];
        nums[n] = t;
      }
    }
  };
  dd(0, []);
  return res;
};
let nums = [2, 3, 4];
console.log(permute(nums));
