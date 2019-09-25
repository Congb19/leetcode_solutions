/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
    let a = {};
    let r = 0;
    let jl = J.length, sl = S.length;
    for(let p = 0; p<sl; p++) {
        for (let q =0; q<jl; q++) {
            if (S[p]==J[q]) r++;
        }
    }

    // console.log(r);
    return r;
};

console.log(numJewelsInStones(J = "aA", S = "aAAbbbb"));