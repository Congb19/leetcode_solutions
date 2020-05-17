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