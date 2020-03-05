/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let res=[...Array(nums.length)].map(()=>0);
    //1. ±©Á¦£¬³¬Ê±
    // for (let i=nums.length-2;i>=0;i--) {
    //     for (let j=i+1;j<nums.length;j++) {
    //         if (nums[j]<nums[i]) res[i]++;
    //     }
    // }
    // return res;
    //2. ÅÅÐò
    let tmp=new Array();
    let p=function (idd, valuee) {
        this.value=valuee,
            this.id=idd
    }
    for (let j=0;j<nums.length;j++) {
        tmp.push(new p(j, nums[j]));
    }
    tmp.sort((a,b)=>{return a.value-b.value;})
    // console.log(tmp);
    for (let i=0;i<tmp.length;i++) {
        res[tmp[i].id]=i;
        for (let j=0;j<i;j++) {
            if (tmp[j].value===tmp[i].value) res[tmp[i].id]--;
            else if (tmp[j].id<tmp[i].id) res[tmp[i].id]--;
        }
    }
    return res;
};
let nums=[5,2,6,1];
console.log(countSmaller(nums));