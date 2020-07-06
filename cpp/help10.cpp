#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
using namespace std;
vector< vector< int > > mySort(vector< vector< int > > a) {
	for (size_t i = 0; i < a.size(); i++) {
		for (size_t j = 0; j < a.size() - 1 - i; j++) {
			if (a[j][0] > a[j + 1][0]) swap(a[j], a[j + 1]);
		}
	}
	return a;
}
vector< vector< int > > solve(vector< vector< int > >& intervals,
							  vector< int >& newInterval) {
	vector< vector< int > > res;
	intervals.push_back(newInterval);
	if (intervals.size() == 0) { return res; }
	intervals = mySort(intervals);
	for (int i = 0; i < intervals.size(); ++i) {
		int L = intervals[i][0], R = intervals[i][1];
		if (!res.size() || res.back()[1] < L) {
			vector< int > t;
			t.push_back(L);
			t.push_back(R);
			res.push_back(t);
			t.clear();
		}
		else {
			res.back()[1] = max(res.back()[1], R);
		}
	}
	return res;
}
int main() {
	vector< vector< int > > intervals;
	vector< int > newInterval;
	int n, a, b;
	cout << "请输入原区间个数" << endl;
	cin >> n;
	cout << "请依次输入区间" << endl;
	while (n--) {
		vector< int > t;
		cin >> a >> b;
		t.push_back(a);
		t.push_back(b);
		intervals.push_back(t);
		t.clear();
	}
	cout << "请输入新区间" << endl;
	cin >> a >> b;
	newInterval.push_back(a);
	newInterval.push_back(b);
	vector< vector< int > > res = solve(intervals, newInterval);
	for (size_t i = 0; i < res.size(); i++) {
		for (size_t j = 0; j < res[0].size(); j++) {
			cout << res[i][j] << " ";
		}
		cout << endl;
	}
	system("pause");
	return 0;
}
