// learn

// let num1=5;
// let num2=num1;
// num1=2;
// console.log(num1, num2);
//
// let t1 = new Object();
// t1.name="123";
// let t2=t1;
// console.log(t1,t2);
// t1.name="321";
// console.log(t1,t2);
//

// let color = "res";
// function f() {
//     let color = "blue";
//     return color;
// }
// // f();
// console.log(f());

// function t() {
//     var a=0;
//     let b=0;
// }
// t();
// console.log(a); //报错
// console.log(b); //报错
// if (true) {
//     var c=0;
//     let d=0;
// }
// console.log(c); //0
// console.log(d); //报错

// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
// const dp = [...Array(12)].map(_=>0); // 数组长度为n+1，值均为0
// console.log(dp);
//
// const a=new Object(), b=new Object();
// a.n="asd";
// b.n="qwe";
// console.log(a.n);
// a=b;


const dp = [...Array(3)].map( (x)=>x=1);
const k = Array(3).map( (x)=>x=1);
// let k=dp;
dp[0]=2;
console.log(dp, k);
