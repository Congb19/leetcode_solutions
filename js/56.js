/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length===0) return intervals;
    let min=intervals[0][0], max=intervals[0][0];
    for (let i=0;i<intervals.length;i++) {
        for (let j=0;j<2;j++) {
            if (intervals[i][j]>max) max=intervals[i][j];
            if (intervals[i][j]<min) min=intervals[i][j];
        }
    }
    // console.log(max, min);
    let arr=new Array(max-min+3);
    let arr2=new Array(max-min+3);
    for (let i=0;i<arr.length;i++) {
        arr[i]=arr2[i]=0;
    }
    // console.log(arr);
    for (let i=0;i<intervals.length;i++) {
        for (let j=intervals[i][0];j<=intervals[i][1];j++) {
            // console.log("wrote! i, j=", i, j);
            arr[j+1-min]=1;
            if (j!=intervals[i][1]) arr2[j+1-min]=1;
        }
    }
    // console.log(arr, arr2);
    let res=new Array(), k=0;
    let tmp = new Array();
    // let p;
    // console.log(typeof (p));
    // console.log(typeof tmp[0]);
    // console.log(tmp.length);
    for (let i=0;i<arr.length;i++) {
        if (arr2[i]===1&&arr[i]===1&&tmp.length===0) {
            tmp[0]=i+min-1;
            // console.log(tmp.length)
        }
        if (arr[i]===1&&arr2[i]===0) {
            // console.log(i, "right");
            if (tmp.length===0) tmp[0]=i+min-1;
            tmp[1]=i+min-1;
            res[k]=tmp;
            // console.log(res);
            tmp = new Array();
            k++;
        }
    }
    return res;
};
let intervals=[[4,4],[5,6]];
console.log(merge(intervals));