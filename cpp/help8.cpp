#include <algorithm>
#include <iostream>
#include <set>
#include <string>
#include <tr1/unordered_map>
#include <vector>
using namespace std;
static int lowbit(int x) {
	return (int)x & (-1 * x);
}
static int getSum(int x, vector< int >& c) {
	int sum = 0;
	for (int i = x; i > 0; i -= lowbit(i)) {
		sum += c[i];
	}
	return sum;
}
static void update(vector< int >& c, int x, int v) {
	for (int i = x; i < c.size(); i += lowbit(i)) {
		c[i] += v;
	}
}
int solve(vector< int >& nums) {
	int res	 = 0;
	int maxN = (INT_MAX) / 2, minN = (INT_MIN) / 2;
	set< int > ss;
	for (int i = 0; i < nums.size(); i++) {
		ss.insert(nums[i]);
		if (nums[i] <= maxN && nums[i] >= minN) ss.insert(nums[i]);
	}
	tr1::unordered_map< int, int > m;
	set< int >::iterator it = ss.begin();
	for (int i = 1; i <= ss.size(); i++) {
		m[*it] = i;
		it++;
	}
	vector< int > sum(ss.size() + 1, 0);
	for (int i = 0; i < nums.size(); i++) {
		if (nums[i] < minN)
			res += getSum(ss.size(), sum);
		else if (nums[i] < maxN) {
			int idx = m[nums[i]];
			res += (getSum(ss.size(), sum) - getSum(idx, sum));
		}
		update(sum, m[nums[i]], 1);
	}
	return res;
}

int main() {
	vector< int > a;
	int t, n;
	cout << "请输入数组大小：" << endl;
	cin >> n;
	cout << "请依次输入数组值：" << endl;
	while (n--) {
		cin >> t;
		a.push_back(t);
	}
	cout << solve(a) << endl;
	system("pause");
	return 0;
}
