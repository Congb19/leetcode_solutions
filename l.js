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
// console.log(a); //����
// console.log(b); //����
// if (true) {
//     var c=0;
//     let d=0;
// }
// console.log(c); //0
// console.log(d); //����

// map() ��������һ�������飬�����Ǹ������е�ÿ��Ԫ�ض�����һ���ṩ�ĺ����󷵻صĽ����
// const dp = [...Array(12)].map(_=>0); // ���鳤��Ϊn+1��ֵ��Ϊ0
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
