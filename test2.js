// while ((line = readline())) {
// 	var lines = line.split(" ");
// 	var a = parseInt(lines[0]);
// 	let arr = [...Array(a + 1)];
// 	arr[0] = 1;
// 	arr[1] = 1;
// 	if (a < 2) {
// 		print(1);
// 	} else {
// 		for (let i = 2; i <= a; i++) {
// 			arr[i] = arr[i - 1] + arr[i - 2];
// 		}
// 		print(arr[a]);
// 	}
// }
// https://exam.nowcoder.com/cts/17067885/summary?id=9A8DACD9DA155A9A

// const fs = require("fs");
// var data = fs.readFileSync("input.txt");
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");

// 实现JS限流调度器，方法add接受一个返回Promise的函数
// 要求：同时执行的任务数量不能超过两个。
class Scheduler {
  async add(promiseFunc: () => Promise<void>): Promise<void> {
    //添加代码
  }
}
const scheduler = new Scheduler();
const timeout = (time) => {
  return new Promise((r) => setTimeout(r, time));
};
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);