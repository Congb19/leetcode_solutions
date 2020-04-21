class Scheduler {
    timer1: null,
    timer2: null,
    async add(promiseFunc: () => Promise<void>): Promise<void> {
        let promiseFunc
        if (timer1&&timer2) {
            return xxx;
        }
        else if (timer1){
            timer2 = promiseFunc();
        }
        else {
            timer1 = promiseFunc();
        }
        return ;
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
