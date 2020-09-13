// learn
function q(args) {
	console.log.apply(null, args);
}

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
var f;
function f1() {
	var a = 2;
	function f2() {
		console.log(a);
	}
	f = f2;
}
function f3() {
	f();
}
f1();
f3();

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

//属性设置和屏蔽全过程
// let b = {
// 	num: 123,
// };
// Object.defineProperty(b, "num", {
// 	writable: false,
// });
// let a = Object.create(b);
// console.log(a, b);
// a.num = 234;
// // console.log(a.__proto__);
// console.log(a, b);

//new和Object.create的区别
// function Car() {
// 	this.color = "red";
// }
// Car.prototype.sayHi = function () {
// 	console.log("你好");
// };
// // console.log(Car.prototype.constructor);
// var car = new Car();
// var car2 = Object.create(Car.prototype);
// // var emp = Object.create(null);
// // console.log(Car);
// console.log(car);
// console.log(car2);
// car.sayHi();
// car2.sayHi();
// // console.log(emp);
// // console.log(car2.color);
// console.log(car.__proto__ === Car.prototype); //true
// console.log(car2.__proto__ === Car.prototype); //false

//各种继承
function Base(name) {
	this.type = name;
}
//1 原型链
// 特点
// 比较原始，简单
// 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
// 父类新增原型方法/原型属性，子类都能访问到
// 缺点：
// 要想为子类新增属性和方法，必须要在new A()这样的语句之后执行，不能放到构造器中
// 无法实现多继承
// 来自原型对象的所有属性被所有实例共享
// 创建子类实例时 无法向父类构造函数传参
// 代码
function A() {}
A.prototype = new Base("cat");
A.prototype.constructor = A;
let a = new A();
console.log(A, a, a.type, A.prototype.constructor);

//2 构造
// 特点
// 解决了1中，子类实例共享父类引用属性的问题
// 创建子类实例时，可以向父类传递参数
// 可以实现多继承（call多个父类对象）
// 缺点：
// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
// 代码
function B() {
	Base.call(this, "dog");
}
let b = new B();
console.log(B, b, b.type);
// 3、实例继承(这什么垃圾方式啊)
// 核心：为父类实例添加新特性，作为子类实例返回
// 特点：
// 不限制调用方式，不管是new 子类()还是子类(), 返回的对象具有相同的效果
// 缺点：
// 实例是父类的实例，不是子类的实例（致命）
// 不支持多继承
// function C(name) {
// 	let t = new Base();
// 	t.name = name || "pig";
// 	return t;
// }
// let c = new C();
// console.log(C, c, c.type);
// 4 拷贝
// 相当于对父类做一次浅拷贝
// 支持多继承
// 但是效率比较低，毕竟要复制一遍
// enumerable为false的属性拷贝不过来
// 5 组合继承
// 核心：通过调用父类构造，继承父类的属性并保留传参的优点
// 然后通过将父类实例作为子类原型，实现函数复用
// 特点：
// 弥补了方式2的缺陷，可以继承实例属性 / 方法，也可以继承原型属性 / 方法
// 既是子类的实例，也是父类的实例
// 不存在引用属性共享问题
// 可传参
// 函数可复用
// 缺点：
// 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
// function E() {
// 	Base.call(this, "eee");
// }
// E.prototype = new Base();
// let e = new E();
// console.log(E, e, e.type);
// 6 组合寄生
// 核心：通过寄生方式，砍掉父类的实例属性，
// 这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
// function F() {
// 	Base.call(this, "fff");
// }
// let Super = function () {};
// Super.prototype = Base.prototype; //多了这一步，借用super
// F.prototype = new Super();
// let f = new F();
// console.log(F, f, f.type);

// 7.Object.create原型继承
// function dad() {
// 	this.name = "dad";
// }
// dad.prototype.getname = function () {
// 	return this.name;
// };
// function son() {
// 	this.name = "son";
// }
// son.prototype = Object.create(dad.prototype);
// //而不是son.prototype=new dad();，用new的话会出现一些问题（比如this指向问题等等）。
// let a = new dad();
// let b = new son();
// let c = Object.create(son.prototype);
// console.log(dad.prototype, son.prototype);
// console.log(a.name, b.name, c.name, a.getname(), b.getname(), c.getname());
// console.log(a.__proto__, b.__proto__, c.__proto__);

// var a = new String("asd");
// var b = "asd";
// console.log(a, typeof a, a instanceof Object, a == b, a === b);

// console.log(3 % 53);
// console.log(JSON.stringify(123));
// console.log(-0 < 0);
// console.log(Promise.resolve(42));

// function ddd() {
// 	function fff() {
// 		console.log("!23");
// 	}
// 	return fff();
// }
// ddd();

// async function pp() {
// 	// Promise.all();
// 	let timer1 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("识别模型加载超时1");
// 		}, 3000);
// 	});
// 	let timer2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject("识别模型加载超时2");
// 		}, 4000);
// 	});
// 	await Promise.race([timer1, timer2]).then(
// 		function (ok) {
// 			console.log(ok, "a");
// 		},
// 		function (err) {
// 			console.log(err, "b");
// 		}
// 	);
// 	console.log("ok");
// }
// pp();

// console.log(Math.pow(3, 19));

// setTimeout(() => {
// 	console.log("setTimeout");
// });
// let p1 = new Promise((resolve) => {
// 	console.log("Promise1");
// 	resolve("Promise2");
// });
// p1.then((res) => {
// 	console.log(res);
// });
// console.log(1);

// a
// setTimeout;
// promise1;
// promise2;
// 1;

// b
// Promise1
// 1
// Promise2
// setTimeout
console.log("abc");
