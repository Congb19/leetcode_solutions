#include <iostream>
using namespace std;
template <class T> class myQueue {
private:
	T* data;

public:
	int nums;
	int start, end;
	myQueue(/* args */);
	~myQueue();
	void push(T el);
	T pop();
	int size();
	bool empty();
};
template <class T> myQueue<T>::myQueue(/* args */) {
	data  = new T[1000];
	nums  = 0;
	start = 0;
}
template <class T> myQueue<T>::~myQueue() {
	if (data) delete[] data;
}
template <class T> void myQueue<T>::push(T el) {
	data[start + nums] = el;
	nums++;
}
template <class T> T myQueue<T>::pop() {
	nums--;
	T tmp = data[start];
	start++;
	return tmp;
}
template <class T> int myQueue<T>::size() {
	return nums;
}
template <class T> bool myQueue<T>::empty() {
	return nums == 0;
}
template <class T> class myStack {
private:
	myQueue<T> q1;
	myQueue<T> q2;

public:
	myStack(/* args */);
	~myStack();
	void push(T el);
	T pop();
	T top();
	bool empty();
};
template <class T> myStack<T>::myStack(/* args */) {}
template <class T> myStack<T>::~myStack() {}
template <class T> void myStack<T>::push(T el) {
	if (!q1.empty())
		q1.push(el);
	else
		q2.push(el);
}
template <class T> T myStack<T>::pop() {
	T res;
	if (q1.empty()) {
		while (q2.size() > 1) {
			int tmp = q2.pop();
			q1.push(tmp);
		}
		res = q2.pop();
	}
	else if (q2.empty()) {
		while (q1.size() > 1) {
			int tmp = q1.pop();
			q2.push(tmp);
		}
		res = q1.pop();
	}
	return res;
}
template <class T> T myStack<T>::top() {
	T res;
	res = pop();
	push(res);
	return res;
}
template <class T> bool myStack<T>::empty() {
	return q1.empty() && q2.empty();
}
int main() {
	myStack<int> test;
	cout << "init" << endl;
	cout << "isempty? 1=true 0=false " << test.empty() << endl;
	test.push(1);
	cout << "push 1" << endl;
	test.push(2);
	cout << "push 2" << endl;
	test.push(3);
	cout << "push 3" << endl;
	cout << "now top: " << test.top() << endl;
	test.pop();
	cout << "pop" << endl;
	cout << "now top: " << test.top() << endl;
	cout << "isempty? 1=true 0=false " << test.empty() << endl;
	system("pause");
	return 0;
}
