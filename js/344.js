/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //1 ¿â
    // s.reverse();
    //2 ²Ù×÷
    let arr=new Array(s.length);
    for (let i=0;i<s.length;i++) {
        arr[i]=s[i];
    }
    for (let i=0;i<Math.floor(s.length/2);i++) {
        let tmp=arr[i];
        arr[i]=arr[s.length-1-i];
        arr[s.length-1-i]=tmp;
    }
    arr.toString();
    let s2=arr.join("");
    s=s2;
    // console.log(s, typeof s2);
};

let nums = [7,1,5,3,6,4], k=12;
let s= "nihao", t="haoni";
console.log(reverseString(s));