/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let res=new Array();

    if (numRows===0) return res;

    res[0]=[1];

    for (let i=1;i<numRows;i++) {
        let tmp=new Array();
        tmp[0]=1;
        for (let j=1; j<i; j++) {
            tmp[j]=res[i-1][j-1]+res[i-1][j];
        }
        tmp[i]=1;
        res[i]=tmp;
    }

    return res;
};

let num = 5;

console.log(generate(num));