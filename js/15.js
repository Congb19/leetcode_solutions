/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n=nums.length;
    if (n<3) return [];
    nums.sort((a,b)=>a-b);
    let res=[...Array()];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>0) break;
        if (i>0&&nums[i]===nums[i-1]) continue;
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            if (nums[i]+nums[l]+nums[r]>0) {
                r--;
            }
            else if (nums[i]+nums[l]+nums[r]<0) {
                l++;
            }
            else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l<r&&nums[l]===nums[l+1]) {
                    l++;
                }
                while (l<r&&nums[r]===nums[r-1]) {
                    r--;
                }
                l++;
                r--;
            }
        }
    }
    return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))