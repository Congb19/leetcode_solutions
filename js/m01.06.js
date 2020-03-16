/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let res = "";
    let tmp = "";
    let times = 0;
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) !== tmp) {
            tmp = S.charAt(i);
            res = res + tmp + "1";
            times = 1;
        }
        else {
            times++;
            let n = (times-1).toString().length;
            res = res.substring(0, res.length-n)+times.toString();
        }
    }
    return res.length<S.length?res:S;
};
console.log(compressString("aaabbccc"))