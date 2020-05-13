#include <iostream>
using namespace std;

int dp[1000][1000];

int solve(int a[], int b[], int na, int nb) {
	//    cout << "dpst" << endl;
	// na=a的长度, nb=b的长度
	int r = 0, c = na;
	for (size_t i = 0; i < na; i++) {
		for (size_t j = 0; j < nb; j++) {
			if (i == 0 || j == 0) {
				if (a[i] == b[j])
					dp[i][j] = 1;
				else
					dp[i][j] = 0;
			}
			else {
				if (a[i] == b[j])
					dp[i][j] = 1 + dp[i - 1][j - 1];
				else
					dp[i][j] = 0;
			}
		}
	}
	//    cout << "dpok" << endl;
	int maxi = 0, maxj = 0, max = 0;
	for (size_t i = 0; i < na; i++) {
		for (size_t j = 0; j < nb; j++) {
			if (dp[i][j] > max) {
				max	 = dp[i][j];
				maxi = i;
				maxj = i;
			}
		}
	}
	cout << "最大相同子数组：";
	for (size_t i = maxi - max + 1; i <= maxi; i++) {
		cout << a[i] << " ";
	}
	cout << endl;
	cout << "最大相同子数组大小：" << max;
	return max;
}

int main() {
	// int a[5] = {-1, 6, 3, -2, 5};
	// int b[5] = {3, -2, 8, -4, 7};
	int a[500];
	int b[500];
	int na, nb;
	cout << "请输入数组a的大小：" << endl;
	cin >> na;
	cout << "请依次输入数组a：" << endl;
	for (size_t i = 0; i < na; i++)
		cin >> a[i];
	cout << "请输入数组b的大小：" << endl;
	cin >> nb;
	cout << "请依次输入数组b：" << endl;
	for (size_t i = 0; i < nb; i++)
		cin >> b[i];
	solve(a, b, na, nb);
	return 0;
}
