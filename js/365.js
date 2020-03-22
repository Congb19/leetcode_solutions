/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if (x === z || y === z || x+y===z || z===0) return true;
    if (x + y < z) return false;
    let dd = (a, b) => {
        let min = Math.min(a,b);
        for (let i=min;i>0;i-- ) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
        }
    }
    if (z%dd(x,y)===0) return true;

    // let dd2 = (a, b) => {
    //     let t = Math.ceil(Math.max(a,b)/Math.min(a,b));
    //     return t*Math.min(a,b)-Math.max(a,b);
    // }
    // let w = dd2(x, y), q = Math.min(x,y)-w;
    // let tmp=[...Array()];
    // tmp.push(w,q);
    // if (Math.min(w, q)!==0) {
    //     for (let i = Math.min(w, q)*2; i < Math.min(x, y); i += Math.min(w, q)) {
    //         tmp.push(i);
    //     }
    // }
    // else {
    //     for (let i = 2*Math.min(x, y); i < Math.max(x, y); i += Math.min(x, y)) {
    //         tmp.push(i);
    //     }
    // }
    // console.log(tmp);
    // for (let i = 0; i < tmp.length; i++) {
    //     if (x+tmp[i]===z||y+tmp[i]===z||x-tmp[i]===z||y-tmp[i]===z) return true;
    // }


    return false;
};
console.log(canMeasureWater(203,113,1));