/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var res=0;
    g=g.sort((a,b)=>{return b-a});
    s=s.sort((a,b)=>{return a-b});
    // console.log(g, s);
    var i=0, j=0;
    for (j=0; j<s.length; j++) {
        for (i=0; i<g.length; i++) {
            if(s[j]>=g[i]) {
                res++;
                g[i]=s[s.length-1]+1;
                break;
            }
        }
    }
    return res;
};

var g=[1,2,3], s=[1,1];
console.log(findContentChildren(g,s));
// console.log("test ", -2147483648<=1);
