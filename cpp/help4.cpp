#include <iostream>
#include <string>
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
	int size();
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
template <class T> int myStack<T>::size() {
	return q1.size() + q2.size();
}
int main() {
	string s;
	cin >> s;
	int c[26]	= {0};
	int vis[26] = {0};
	for (int i = 0; i < s.size(); i++) {
		c[s[i] - 'a']++;
	}
	// string res = "";
	myStack<char> res;
	myStack<char> res2;
	for (int i = 0; i < s.size(); i++) {
		c[s[i] - 'a']--;
		if (vis[s[i] - 'a']) { continue; }
		while (res.size() && c[res.top() - 'a'] > 0 && res.top() > s[i]) {
			vis[res.top() - 'a'] = 0;
			res.pop();
		}
		res.push(s[i]);
		vis[s[i] - 'a'] = 1;
		// cout << "now res size=" << res.size() << endl;
	}
	int n = res.size();
	for (int i = 0; i < n; i++) {
		res2.push(res.pop());
	}
	for (int i = 0; i < n; i++) {
		cout << res2.pop();
	}
	cout << endl;
	system("pause");
	return 0;
}
