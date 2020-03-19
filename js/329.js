/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let res=0;
    let r=matrix.length;
    if (r===0) return 0;
    let c=matrix[0].length;
    //朴素dfs，超时
    // let use=[...Array(r)].map(()=>[...Array(c)].map(()=>0));
    // let dd = (i, j, d) => {
    //     use[i][j]=1;
    //     if (d>res) res=d;
    //     if (i-1>=0&&use[i-1][j]===0&&matrix[i-1][j]>matrix[i][j]) dd(i-1, j, d+1);
    //     if (j-1>=0&&use[i][j-1]===0&&matrix[i][j-1]>matrix[i][j]) dd(i, j-1, d+1);
    //     if (i+1<r&&use[i+1][j]===0&&matrix[i+1][j]>matrix[i][j]) dd(i+1, j, d+1);
    //     if (j+1<c&&use[i][j+1]===0&&matrix[i][j+1]>matrix[i][j]) dd(i, j+1, d+1);
    //     use[i][j]=0;
    // }
    // for (let i = 0; i < r; i++) {
    //     for (let j = 0; j < c; j++) {
    //         dd(i, j, 1);
    //     }
    // }
    //记忆化dfs   use[i][j]表示dd(i, j)的结果，如果已经算过则不用再走一遍了。
    let use=[...Array(r)].map(()=>[...Array(c)].map(()=>0));
    let dd = (i, j) => {
        if (use[i][j]!==0) return use[i][j];
        if (i-1>=0&&matrix[i-1][j]>matrix[i][j]) use[i][j]=Math.max(use[i][j], dd(i-1, j)+1);
        if (j-1>=0&&matrix[i][j-1]>matrix[i][j]) use[i][j]=Math.max(use[i][j], dd(i, j-1)+1);
        if (i+1<r&&matrix[i+1][j]>matrix[i][j]) use[i][j]=Math.max(use[i][j], dd(i+1, j)+1);
        if (j+1<c&&matrix[i][j+1]>matrix[i][j]) use[i][j]=Math.max(use[i][j], dd(i, j+1)+1);
        return use[i][j];
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            res=Math.max(res, dd(i, j));
        }
    }
    // console.log(use);
    return res+1;
};
console.log(longestIncreasingPath([
    [9,9,4],
    [6,6,8],
    [2,1,1]
]  ))