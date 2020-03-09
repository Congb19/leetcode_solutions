/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr=[...Array()];
    let r=matrix.length;
    if (r===0) return 0;
    let c=matrix[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            arr.push(matrix[i][j]);
        }
    }
    arr.sort((a,b)=>a-b);
    // let q=0;
    // for (let i=0;i<arr.length;i++) {
    //     if (i===arr.length-1||arr[i]!==arr[i+1]) q++;
    //     if (q>=k) return arr[i];
    // }
    return arr[k-1];
};

let matrix = [
        [ 1,  2,  3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    k = 8;
console.log(kthSmallest(matrix, k));