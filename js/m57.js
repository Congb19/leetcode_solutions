/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res=[...Array()];
    let k=2;
    while (target/k-k/2>0) {
        if (k%2===0) {
            if (target/k-Math.floor(target/k)===0.5) {
                let tmp=[...Array()];
                for (let i=Math.floor(target/k)-k/2+1;i<Math.floor(target/k)+k/2+1;i++) {
                    tmp.push(i);
                }
                res.push(tmp);
            }
        }
        else {
            if (target/k-Math.floor(target/k)===0) {
                let tmp=[...Array()];
                for (let i=Math.floor(target/k)-Math.floor(k/2);i<Math.floor(target/k)+Math.floor(k/2)+1;i++) {
                    tmp.push(i);
                }
                res.push(tmp);
            }
        }
        k++;
    }
    res.sort((a,b)=>{return a[0]-b[0]});
    return res;
};
let nums=[5,2,6,1];
console.log(findContinuousSequence(15));