/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //思路1 暴力模拟
    // let xx=0,fl=0;
    // let r=grid.length;
    // if (r===0) return 0;
    // let c=grid[0].length;
    // let tmp=new Array(r);
    // for (let i=0;i<r;i++) {
    //     tmp[i]=new Array(c);
    //     for (let j=0;j<c;j++) {
    //         tmp[i][j]=grid[i][j];
    //         if (grid[i][j]===1) {
    //             xx++;
    //         }
    //         if (grid[i][j]===2) {
    //             fl++;
    //         }
    //     }
    // }
    // let res=0;
    // let lastxx=xx;
    // while (xx>0) {
    //     for (let i=0;i<r;i++) {
    //         for (let j=0;j<c;j++) {
    //             if (grid[i][j]===2) {
    //                 if (i+1<r&&tmp[i+1][j]===1) {
    //                     fl++; xx--;
    //                     tmp[i+1][j]=2;
    //                 }
    //                 if (j+1<c&&tmp[i][j+1]===1) {
    //                     fl++; xx--;
    //                     tmp[i][j+1]=2;
    //                 }
    //                 if (i-1>=0&&tmp[i-1][j]===1) {
    //                     fl++; xx--;
    //                     tmp[i-1][j]=2;
    //                 }
    //                 if (j-1>=0&&tmp[i][j-1]===1) {
    //                     fl++; xx--;
    //                     tmp[i][j-1]=2;
    //                 }
    //             }
    //         }
    //     }
    //     for (let i=0;i<r;i++) {
    //         for (let j=0;j<c;j++) {
    //             grid[i][j]=tmp[i][j];
    //         }
    //     }
    //     res++;
    //     if (lastxx===xx) return -1;
    //     lastxx=xx;
    // }
    // return res;

    //思路2 BFS
    let q = [];
    let newFresh = 0;
    let minutes = 0;
    // Push rotten oranges to the stack and count fresh oranges
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) q.push([i, j]);
            if (grid[i][j] === 1) newFresh++;
        }
    }

    while (q.length && newFresh) {
        let newQ = []; // queue for next minute
        while (q.length) {
            let badOrange = q.shift();
            let newRottens = infectOthers(grid, badOrange[0], badOrange[1], newQ);
            newFresh -= newRottens;
        }
        minutes++;
        q = newQ;
    }
    if (newFresh !== 0) return -1;
    return minutes;
};

// Infect surrounding oranges
// Return the number of newly infected oranges
var infectOthers = function (grid, i, j, q) {
    let infected = 0;
    if (i > 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j]++;
        infected++;
        q.push([i - 1, j]);
    }
    if (j > 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1]++;
        infected++;
        q.push([i, j - 1]);
    }
    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
        grid[i + 1][j]++;
        infected++;
        q.push([i + 1, j]);
    }
    if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
        grid[i][j + 1]++;
        infected++;
        q.push([i, j + 1]);
    }

    return infected;
}




let grid=[[2,1,1],[0,1,1],[1,0,1]];
console.log(orangesRotting(grid));