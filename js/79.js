/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    //思路和判断几乎和C++的题解一毛一样，超时，抄答案过
    let r=board.length;
    if (r===0) return false;
    let c=board[0].length;
    if (r*c<word.length) return false;
    let use = [...Array(r)].map(()=>[...Array(c)].map(()=>0));
    let dfs = (i, j, k) => {
        use[i][j]=1;
        let res=false;
        if (board[i][j].toString()!==word.charAt(k)) res=false;
        else if (k===word.length-1) res=true;
        else {
            let r1=false, r2=false, r3=false, r4=false;
            if (i-1>=0&&use[i-1][j]===0) r1=dfs(i-1, j, k+1);
            if (j-1>=0&&use[i][j-1]===0) r2=dfs(i, j-1, k+1);
            if (i+1<r&&use[i+1][j]===0) r3=dfs(i+1, j, k+1);
            if (j+1<c&&use[i][j+1]===0) r4=dfs(i, j+1, k+1);
            if (r1||r2||r3||r4) res=true;
        }
        use[i][j]=0;
        return res;
    };
    for (let i=0; i<r; i++ ){
        for (let j = 0; j < c; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
let board = [["a","a","a"],["a","b","b"],["a","b","b"],["b","b","b"],["b","b","b"],["a","a","a"],["b","b","b"],["a","b","b"],["a","a","b"],["a","b","a"]];
console.log(exist(board, "aabaaaabbb"));