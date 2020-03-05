/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    self=new Array();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    self.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let n=self.length;
    if (n===0) return 0;
    self.sort((a,b)=>{return a-b;});
    if (n%2===0) return (self[n/2]+self[n/2-1])/2;
    else return self[Math.floor(n/2)];
};
let num=1;
var obj = new MedianFinder()
obj.addNum(num)
obj.addNum(2)
var param_2 = obj.findMedian();
console.log(param_2)
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// let matrix=[
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
// ], target=5;
// console.log(searchMatrix(matrix, target));