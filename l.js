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

// const dp = [...Array(3)].map( (x)=>x=1);
// const k = Array(3).map( (x)=>x=1);
// // let k=dp;
// dp[0]=2;
// console.log(dp, k);

// let s="nininihao";
// // s.reverse();
// s.charAt(2);
// s=s.substr(0,2)+"p"+s.substr(2+1);
// console.log(s, s.charAt(2));

// s=s+"123"

// console.log(Math.floor(Math.random()*100));

//
// function getName() {
//     // console.log(this.name);
//     return this.name;
// }
// var a={name:"qwe"};
// var name=getName();
// console.log(a.name, typeof a.name, a.name==='qwe');
// console.log(name, typeof name, name==='');

//
// let a=[1,2,3];
// let b=a.concat(1,2,[5,6,7],4);
// console.log(b);

// let test1 = Date.now();
// let test2 = Date.now();
// setTimeout(function () {
//     test2 = Date.now();
//     console.log(test2-test1);
// }, 2200);

// let test3 = new Date();
// console.log(test3.toLocaleString())
// console.log(test3.toString())
// console.log(test3.toDateString())
// test3.setTime(-100000000);
// console.log(test3.toString())
// console.log(test3.getDay())
// console.log(()=>0);

//vscode git test

// function object(o) {
// 	function F() {}
// 	F.prototype = o;
// 	return new F();
// }
// const foo = function() {
// 	this.x = "1";
// };
// foo.name="1";

// const bac=new foo();
// // bac.name="2";
//
// const bar = foo;
// bar.x="2";

// const baz = Object.create(
// 	foo
// 	// {
// 	//     name: {
// 	//         value: "123",
// 	//     },
// 	//     // id: "23",
// 	// }
// );
// const bad = object(foo);
// // baz.name="3";

// console.log(foo, typeof foo);
// // console.log(bac, typeof bac);
// // console.log(bar, typeof bar);
// console.log(baz, typeof baz);
// console.log(bad, typeof bad);

// console.log("大家好");
// let asd = () => {};

// let timeoutId = setTimeout(() => {
// 	console.log(123);
// }, 1000);
// clearTimeout(timeoutId);
// alert(123);

// var readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });
// rl.on("line", function(line) {
// 	var tokens = line.split(" ");
// 	console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
// });

// while ((line = readline())) {
// 	var lines = line.split(" ");
// 	var a = parseInt(lines[0]);
// 	var b = parseInt(lines[1]);
// 	print(a + b);
// }
// {
// 	let a;
// 	console.log(a);
// }

// let date = new Date();
// setTimeout(() => {
// 	console.log(new Date() - date);
// }, 1000);
// while (new Date() - date < 2000);

// 闭包例子1
// var f;
// function f1() {
// 	var a = 2;
// 	function f2() {
// 		console.log(a);
// 	}
// 	f = f2;
// }
// function f3() {
// 	f();
// }
// f1();
// f3();

// 闭包例子2 循环
// for (var i = 0; i < 5; i++) {
// 	setTimeout(function timer() {
// 		console.log(i);
// 	}, i * 1000);
// }
// console.log("i:", i);
// for (let i = 0; i < 5; i++) {
// 	setTimeout(function timer() {
// 		console.log(i);
// 	}, i * 1000);
// }
// console.log(__filename);

// 闭包例子3 模块
// 必须有一个外部封闭函数（f1）且至少调用一次（赋值给了fff）
// 必须返回至少一个内部函数（f2），这样f2就在f1内部作用域形成了闭包
// function f1() {
// 	let a = 321;
// 	let b = "123";
// 	function f2(params) {
// 		b = params;
// 		console.log(a, b);
// 	}
// 	return {
// 		func: f2,
// 	};
// }
// let fff = f1();
// fff.func("124");

//this测试1
// self替代法
// var obj = {
// 	count: 0,
// 	cool: function coolFn() {
// 		console.log(this);
// 		let self = this;
// 		if (self.count < 1) {
// 			setTimeout(function timer() {
// 				console.log(this);
// 				self.count++;
// 				console.log(self.count);
// 			}, 100);
// 		}
// 	},
// };
// 箭头函数的this强行绑定
// obj.cool();
// var obj = {
// 	count: 0,
// 	cool: function coolFn() {
// 		console.log(this);
// 		if (this.count < 1) {
// 			setTimeout(() => {
// 				console.log(this);
// 				this.count++;
// 				console.log(this.count);
// 			}, 100);
// 		}
// 	},
// };
// obj.cool();

//this测试2
// 函数调用栈
// function f1() {
// 	debugger;
// 	console.log("f1");
// 	f2();
// }
// function f2() {
// 	debugger;
// 	console.log("f2");
// }
// f1();
// let ko = Object.create(null);

// let arr = ["ad", "asd", "assd"];
// arr["0"] = "123";
// let str = "hello";
// console.log(arr["0"], arr, typeof arr);
// console.log(arr instanceof Object, arr instanceof Array);
// console.log(str, typeof str);
// console.log(str instanceof Object, str instanceof String);

// let obj = {
// 	get a() {
// 		return 3; //此处如果是this.a，则又调用了getter，进入死循环
// 	},
// 	set a(val) {
// 		this.a = val;
// 	},
// };
// obj.a = 2;
// console.log(obj.a);
