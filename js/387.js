/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let res=0;
    if(s.length===0) return -1;
    let nums = new Array(26);
    for(let i=0;i<26;i++) {
        nums[i]=0;
    }
    for(let i=0;i<s.length;i++) {
        nums[s[i].charCodeAt()-'a'.charCodeAt()]++;
    }
    // console.log(nums);
    for(let i=0;i<s.length;i++) {
        if(nums[s[i].charCodeAt()-'a'.charCodeAt()]===1) return i;
    }
    return -1;
};
console.log(firstUniqChar("cc"));